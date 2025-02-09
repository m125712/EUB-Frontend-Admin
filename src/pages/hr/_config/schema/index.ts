import { z } from 'zod';

import {
	FORTUNE_ZIP_EMAIL_PATTERN,
	PASSWORD,
	PHONE_NUMBER_REQUIRED,
	STRING_NULLABLE,
	STRING_OPTIONAL,
	STRING_REQUIRED,
} from '@/utils/validators';

//* Department Schema
export const DEPARTMENT_SCHEMA = z.object({
	name: STRING_REQUIRED,
	remarks: STRING_NULLABLE,
});

export const DEPARTMENT_NULL: Partial<IDepartment> = {
	name: '',
	remarks: null,
};

export type IDepartment = z.infer<typeof DEPARTMENT_SCHEMA>;

//* Designation Schema
export const DESIGNATION_SCHEMA = z.object({
	name: STRING_REQUIRED,
	remarks: STRING_NULLABLE,
});

export const DESIGNATION_NULL: Partial<IDesignation> = {
	name: '',
	remarks: null,
};

export type IDesignation = z.infer<typeof DESIGNATION_SCHEMA>;

//* User Schema
export const USER_SCHEMA = (isUpdate: boolean) => {
	const baseSchema = z.object({
		name: STRING_REQUIRED,
		department_uuid: STRING_NULLABLE,
		designation_uuid: STRING_NULLABLE,
		email: FORTUNE_ZIP_EMAIL_PATTERN,
		phone: PHONE_NUMBER_REQUIRED,
		office: STRING_REQUIRED,
		remarks: STRING_NULLABLE,
	});

	if (isUpdate) {
		return baseSchema
			.extend({
				pass: STRING_OPTIONAL,
				repeatPass: STRING_OPTIONAL,
				// image: z.instanceof(File).refine((file) => file?.size !== 0, 'Please upload an image'),
				image: z.any(),
				// image: z.preprocess((value) => (Array.isArray(value) ? value : [value]), z.array(z.instanceof(File))),
			})
			.superRefine((data, ctx) => {
				if (data.pass !== data.repeatPass) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Passwords do not match',
						path: ['repeatPass'],
					});
				}

				if (!data.image) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Please upload an image',
						path: ['image'],
					});
				}
			});
	}

	return baseSchema
		.extend({
			pass: PASSWORD,
			repeatPass: PASSWORD,
			image: z.instanceof(File).refine((file) => file?.size !== 0, 'Please upload an image'),
		})
		.superRefine((data, ctx) => {
			if (data.pass !== data.repeatPass) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Passwords do not match',
					path: ['repeatPass'],
				});
			}
		});
};

export const USER_NULL: Partial<IUser> = {
	name: '',
	email: '',
	department_uuid: null,
	designation_uuid: null,
	phone: '',
	remarks: null,
	// image: new File([''], 'filename') as File,
};

export type IUser = z.infer<ReturnType<typeof USER_SCHEMA>>;

//* Reset Password Schema
export const RESET_PASSWORD_SCHEMA = z
	.object({
		pass: PASSWORD,
		repeatPass: PASSWORD,
	})
	.refine((data) => data.pass === data.repeatPass, {
		message: 'Passwords do not match',
		path: ['repeatPass'],
	});

export const RESET_PASSWORD_NULL: Partial<IResetPasswordSchema> = {
	pass: '',
	repeatPass: '',
};

export type IResetPasswordSchema = z.infer<typeof RESET_PASSWORD_SCHEMA>;
