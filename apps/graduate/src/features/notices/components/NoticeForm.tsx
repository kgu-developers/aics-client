import { useState } from 'react';
import { Input, Button, Checkbox, Upload, Divider } from 'antd';
import type { CheckboxChangeEvent, UploadProps } from 'antd';
import { useNavigate } from '@tanstack/react-router';
import * as style from './NoticeForm.css';
import { noticeFormData } from '../mock/notices';
import { NoticeFormItem } from '../types/notices';

const { TextArea } = Input;

interface NoticeDetailProps {
	noticeId?: number;
}

export default function NoticeForm({ noticeId }: NoticeDetailProps) {
	const navigate = useNavigate();
	const isEditMode = !!noticeId;
	const data = noticeFormData;
	const { createdAt, updatedAt } = data;

	const [formState, setFormState] = useState<NoticeFormItem>({
		title: data?.title || '',
		content: data?.content || '',
		isPinned: data?.isPinned || false,
	});
	const { title, content, isPinned } = formState;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormState(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCheckboxChange = (e: CheckboxChangeEvent) => {
		setFormState(prev => ({
			...prev,
			isPinned: e.target.checked,
		}));
	};

	const uploadProps: UploadProps = {
		name: 'file',
		multiple: true,
		beforeUpload: file => {
			window.alert(`${file.name} 파일이 선택되었습니다.`);
			return false;
		},
	};

	const handleSave = () => {
		if (!title.trim()) {
			window.alert('제목을 입력해주세요.');
			return;
		}
		if (!content.trim()) {
			window.alert('내용을 입력해주세요.');
			return;
		}
		window.alert(isEditMode ? '공지사항이 수정되었습니다.' : '공지사항이 작성되었습니다.');
		handleGoBack();
	};

	const handleDelete = () => {
		if (window.confirm('정말 삭제하시겠습니까?')) {
			window.alert('공지사항이 삭제되었습니다.');
			handleGoBack();
		}
	};

	const handleGoBack = () => {
		navigate({ to: '/notices' });
	};

	return (
		<div className={style.container}>
			<div className={style.backButtonWrapper}>
				<Button onClick={handleGoBack} type="text" size="large">
					목록으로
				</Button>
			</div>

			<div className={style.formCard}>
				<h1 className={style.formTitle}>{isEditMode ? '공지사항 수정' : '공지사항 작성'}</h1>

				{isEditMode && (
					<div className={style.metaInfo}>
						<div className={style.metaItem}>작성일: {createdAt}</div>
						<div className={style.metaItem}>수정일: {updatedAt}</div>
					</div>
				)}

				<div className={style.formField}>
					<label className={style.label}>
						제목 <span className={style.required}>*</span>
					</label>
					<Input name="title" value={title} onChange={handleInputChange} placeholder="제목을 입력하세요" size="large" />
				</div>

				<div className={style.formField}>
					<Checkbox checked={isPinned} onChange={handleCheckboxChange}>
						<span className={style.checkboxLabel}>상단 고정 (공지로 표시)</span>
					</Checkbox>
				</div>

				<div className={style.formField}>
					<label className={style.label}>
						내용 <span className={style.required}>*</span>
					</label>
					<TextArea
						name="content"
						value={content}
						onChange={handleInputChange}
						placeholder="내용을 입력하세요"
						rows={15}
						className={style.textarea}
					/>
				</div>

				<div className={style.uploadSection}>
					<label className={style.label}>첨부파일</label>
					<Upload {...uploadProps}>
						<Button>파일 선택</Button>
					</Upload>
				</div>

				<Divider />

				<div className={style.actionSection}>
					<div className={style.leftActions}>
						{isEditMode && (
							<Button onClick={handleDelete} size="large">
								삭제
							</Button>
						)}
					</div>
					<div className={style.rightActions}>
						<Button onClick={handleGoBack} size="large">
							취소
						</Button>
						<Button type="primary" onClick={handleSave} size="large">
							{isEditMode ? '수정' : '작성'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
