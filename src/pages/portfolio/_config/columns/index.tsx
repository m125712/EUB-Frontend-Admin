import { ColumnDef } from '@tanstack/react-table';

import StatusButton from '@/components/buttons/status';
import ColumnImage from '@/components/core/data-table/_views/column-image';
import { ContentModal, RichTextModal } from '@/components/core/modal';
import FilePreview from '@/components/others/file-preview';
import { LinkWithRedirect } from '@/components/others/link';
import DateTime from '@/components/ui/date-time';

import { categories as authoritiesCategories } from '../../authorities/utils';
import { categories as botCategories, status as botStatus } from '../../boardOfTrustees/utils';
import { InfoLinks } from '../../info/utils';
import { categories as officeCategories } from '../../office/utills';
import {
	IAuthoritiesTableData,
	IBotTableData,
	IDepartmentTableData,
	IDepartmentTeachersTableData,
	IFacultyTableData,
	IInfoTableData,
	IOffersTableData,
	IOfficeEntryTableData,
	IOfficeTableData,
	IRoutineTableData,
	ITeacherTableData,
} from './columns.type';

// * Department
export const departmentColumns = (): ColumnDef<IDepartmentTableData>[] => [
	{
		accessorKey: 'index',
		header: 'Index',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'name',
		header: 'Name',
		enableColumnFilter: true,
		cell: (info) => {
			const link = info.row.original.page_link;
			return <LinkWithRedirect baseUrlNeeded={false} uri={link} title={info.getValue() as string} />;
		},
	},
	{
		accessorKey: 'short_name',
		header: 'Short Name',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'faculty_name',
		header: 'Faculty',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		enableColumnFilter: true,
		cell: (info) => <span className='capitalize'>{info?.getValue() as string}</span>,
	},
];

// * Teacher
export const teacherColumns = (): ColumnDef<ITeacherTableData>[] => [
	{
		accessorKey: 'status',
		header: 'Status',
		enableColumnFilter: true,
		cell: (info) => {
			const status = info.row.original.status;
			return <StatusButton value={status} />;
		},
		size: 20,
		maxSize: 20,
	},
	{
		accessorKey: 'teacher_initial',
		header: 'Initial',
		enableColumnFilter: true,
		size: 20,
		maxSize: 20,
	},
	{
		accessorKey: 'teacher_name',
		header: 'Name',
		enableColumnFilter: true,
	},

	{
		accessorKey: 'teacher_email',
		header: 'Email',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'teacher_phone',
		header: 'Phone',
		enableColumnFilter: true,
	},

	{
		accessorKey: 'about',
		header: 'About',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='About' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'education',
		header: 'Education',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Education' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'publication',
		header: 'Publication',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Publication' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'journal',
		header: 'Journal',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Journal' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'interests',
		header: 'Interests',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Interests' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'awards',
		header: 'Awards',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Awards' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'experience',
		header: 'Experience',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Experience' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'courses',
		header: 'Courses',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Courses' content={info.getValue() as string} />,
	},
	{
		accessorKey: 'corporate',
		header: 'Corporate',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Corporate' content={info.getValue() as string} />,
	},

	{
		accessorKey: 'appointment_date',
		header: 'Appointment Date',
		enableColumnFilter: true,
		cell: (info) => <DateTime date={info.getValue() as Date} isTime={false} />,
	},
	{
		accessorKey: 'resign_date',
		header: 'Resign Date',
		enableColumnFilter: true,
		cell: (info) => <DateTime date={info.getValue() as Date} isTime={false} />,
	},
];

//* Program Columns
export const programColumns = (): ColumnDef<IInfoTableData>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'name',
		header: 'Name',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		enableColumnFilter: true,
		cell: (info) => <span className='capitalize'>{info?.getValue() as string}</span>,
	},
];
//* Authorities Columns
export const authoritiesColumns = (): ColumnDef<IAuthoritiesTableData>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'user_name',
		header: 'User',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'phone',
		header: 'User',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'email',
		header: 'User',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		enableColumnFilter: true,
		cell: (info) => {
			const category = authoritiesCategories.find((item) => item.value === info.getValue());
			return <LinkWithRedirect uri={`/authorities/${category?.link}`} title={category?.label as string} />;
		},
	},
	{
		accessorKey: 'short_biography',
		header: 'Short Biography',
		enableColumnFilter: false,
		cell: (info) => <RichTextModal title='Short Biography' content={info.getValue() as string} />,
	},
];

// * Faculty Columns
export const facultyColumns = (): ColumnDef<IFacultyTableData>[] => [
	{
		accessorKey: 'name',
		header: 'Name',
		enableColumnFilter: true,
	},
];

// * Info Columns
export const infoColumns = (): ColumnDef<IInfoTableData>[] => [
	{
		accessorKey: 'is_offer',
		header: 'Offer',
		enableColumnFilter: true,
		cell: (info) => <StatusButton value={info?.getValue() as boolean} />,
	},
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'page_name',
		header: 'Page Name',
		enableColumnFilter: true,
		cell: (info) => {
			const category = InfoLinks.find((item) => item.value === info.getValue());
			return <LinkWithRedirect uri={`${category?.link}`} title={category?.label as string} />;
		},
	},
	{
		accessorKey: 'description',
		header: 'Description',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'file',
		header: 'File',
		enableColumnFilter: true,
		cell: (info) => <FilePreview preview={info.getValue() as string} />,
	},
];

// * Routine Columns
type IRoutineKeyValue = { [key: string]: string };
const programType: IRoutineKeyValue = {
	regular: 'regular-program-',
	evening: 'evening-program-',
	none: '',
};
const programTypeValue: IRoutineKeyValue = {
	class_routine: 'class-routine',
	exam_schedule: 'exam-schedule',
	course_offer: 'course-offer',
	notices: 'notices',
};
export const routineColumns = (): ColumnDef<IRoutineTableData>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: false,
		size: 20,
	},
	{
		accessorKey: 'department_name',
		header: 'Department',
		enableColumnFilter: true,
		size: 20,
		cell: (info) => {
			const link = info.row.original.page_link;
			return <LinkWithRedirect baseUrlNeeded={false} uri={link} title={info.getValue() as string} />;
		},
	},
	{
		accessorKey: 'programs',
		header: 'Programs',
		enableColumnFilter: true,
		size: 20,
	},
	{
		accessorKey: 'type',
		header: 'Type',
		enableColumnFilter: true,
		size: 20,
		cell: (info) => {
			const { programs, page_link, type } = info.row.original;
			let baseUrl = page_link.split('=')[0] + '=';
			if (type == 'notices') {
				baseUrl += 'notices';
			} else {
				baseUrl += programType[programs] + programTypeValue[type];
			}

			return <LinkWithRedirect baseUrlNeeded={false} uri={baseUrl} title={info.getValue() as string} />;
		},
	},
	{
		accessorKey: 'description',
		header: 'Description',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title='Description' content={info.getValue() as string} />,
	},
	// {
	// 	accessorKey: 'is_global',
	// 	header: 'Global',
	// 	enableColumnFilter: true,
	// 	cell: (info) => <StatusButton value={info.getValue() as number} />,
	// },
	{
		accessorKey: 'file',
		header: 'File',
		enableColumnFilter: false,
		cell: (info) => <FilePreview preview={info.getValue() as string} />,
		meta: {
			disableFullFilter: true,
		},
	},
];

//* BOT Columns
export const botColumns = (): ColumnDef<IBotTableData>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		enableColumnFilter: true,
		cell: (info) => {
			const category = botCategories.find((item) => item.value === info.getValue());
			return <LinkWithRedirect uri={`${category?.link}`} title={category?.label as string} />;
		},
	},
	{
		accessorKey: 'user_name',
		header: 'User Name',
		enableColumnFilter: false,
	},
	{
		accessorKey: 'user_designation',
		header: 'Designation',
		enableColumnFilter: false,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		enableColumnFilter: false,
		cell: (info) => {
			const category = botStatus.find((item) => item.value === info.getValue());
			return <span className='capitalize'>{category?.label ?? ''}</span>;
		},
	},
	{
		accessorKey: 'description',
		header: 'Description',
		enableColumnFilter: false,
	},
];

// * Department-Teachers Columns
export const departmentTeachersColumns = (): ColumnDef<IDepartmentTeachersTableData>[] => [
	{
		accessorKey: 'department_name',
		header: 'Department',
		enableColumnFilter: true,
		cell: (info) => {
			const link = info.row.original.page_link;
			return <LinkWithRedirect baseUrlNeeded={false} uri={link} title={info.getValue() as string} />;
		},
	},
	{
		accessorKey: 'teacher_name',
		header: 'Teacher',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'teacher_image',
		header: 'Image',
		enableColumnFilter: false,
		cell: (info) => <ColumnImage src={info.getValue() as string} alt={info.row.original.teacher_name} />,
	},
	{
		accessorKey: 'teacher_designation',
		header: 'Designation',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'teacher_email',
		header: 'Email',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'teacher_phone',
		header: 'Phone',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},

	{
		accessorKey: 'teacher_name',
		header: 'Teacher',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'department_head',
		header: 'Department Head',
		enableColumnFilter: true,
		cell: (info) => <StatusButton value={info?.getValue() as boolean} />,
	},
	{
		accessorKey: 'education',
		header: 'Education',
		enableColumnFilter: true,
		cell: (info) => (
			<RichTextModal title={`${info.row.original.teacher_name}`} content={info.getValue() as string} />
		),
	},
	{
		accessorKey: 'about',
		header: 'About',
		enableColumnFilter: true,
		cell: (info) => (
			<RichTextModal title={`About ${info.row.original.teacher_name}`} content={info.getValue() as string} />
		),
	},
	{
		accessorKey: 'appointment_date',
		header: 'Appointment Date',
		enableColumnFilter: true,
		cell: (info) => <DateTime isTime={false} date={info.getValue() as Date} />,
	},
	{
		accessorKey: 'resign_date',
		header: 'Resign Date',
		enableColumnFilter: true,
		cell: (info) => <DateTime isTime={false} date={info.getValue() as Date} />,
	},
	{
		accessorKey: 'publication',
		header: 'Publications',
		enableColumnFilter: true,
		cell: (info) => <RichTextModal title={'Publications'} content={info.getValue() as string} />,
	},
	{
		accessorKey: 'journal',
		header: 'Journal',
		enableColumnFilter: true,
		cell: (info) => <ContentModal title={`Journal`} content={info.getValue() as string} />,
	},
];

//* Office
export const officeColumns = (): ColumnDef<IOfficeTableData>[] => [
	{
		accessorKey: 'index',
		header: 'Index',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'title',
		header: 'Title',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		enableColumnFilter: true,
		cell: (info) => {
			const category = officeCategories.find((item) => item.value === info.getValue());
			return (
				<LinkWithRedirect uri={`/authorities/offices/${category?.link}`} title={category?.label as string} />
			);
		},
	},
	{
		accessorKey: 'image',
		header: 'Image',
		enableColumnFilter: false,
		cell: (info) => (
			<ColumnImage
				className='object-contain object-center'
				src={info.getValue() as string}
				alt={info.row.original.title}
			/>
		),
	},
];
//*Office Entry
export const officeEntryColumns = (): ColumnDef<IOfficeEntryTableData>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'user_name',
		header: 'User',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'designation',
		header: 'Designation',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
		enableColumnFilter: true,
	},
	{
		accessorKey: 'email',
		header: 'Email',
		enableColumnFilter: true,
	},
];
// * Offers Columns
export const offersColumns = (): ColumnDef<IOffersTableData>[] => [
	{
		accessorKey: 'serial',
		header: 'Serial',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
		size: 20,
	},
	{
		accessorKey: 'title',
		header: 'Title',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'file',
		header: 'File',
		enableColumnFilter: true,
		cell: (info) => <FilePreview preview={info.getValue() as string} />,
	},

	{
		accessorKey: 'subtitle',
		header: 'Subtitle',
		enableColumnFilter: true,
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'deadline',
		header: 'Deadline',
		enableColumnFilter: true,
		cell: (info) => <DateTime date={info.getValue() as Date} isTime={false} />,
	},
];
