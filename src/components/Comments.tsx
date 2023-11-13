import { useState } from 'react';

const COMMENTS = [
	{
		id: 1,
		email: 'admin1@blog.com',
		content: '댓글1',
		createdAt: '2023-01-13',
	},
	{
		id: 2,
		email: 'admin2@blog.com',
		content: '댓글2',
		createdAt: '2023-01-13',
	},
	{
		id: 3,
		email: 'admin3@blog.com',
		content: '댓글3',
		createdAt: '2023-01-13',
	},
	{
		id: 4,
		email: 'admin4@blog.com',
		content: '댓글4',
		createdAt: '2023-01-13',
	},
	{
		id: 5,
		email: 'admin5@blog.com',
		content: '댓글5',
		createdAt: '2023-01-13',
	},
	{
		id: 6,
		email: 'admin6@blog.com',
		content: '댓글6',
		createdAt: '2023-01-13',
	},
	{
		id: 7,
		email: 'admin7@blog.com',
		content: '댓글7',
		createdAt: '2023-01-13',
	},
];

export default function Comments() {
	const [comment, setComment] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const {
			target: { name, value },
		} = e;

		if (name === 'comment') {
		}
		setComment(value);
	};

	return (
		<div className="comments">
			<form className="comments__form">
				<div className="form__block">
					<label htmlFor="comment">댓글 입력</label>
					<textarea
						name="comment"
						id="comment"
						required
						value={comment}
						onChange={onChange}
					/>
				</div>
				<div className="form__block">
					<input type="submit" className="form__btn-submit" value="입력" />
				</div>
			</form>
			<div className="comments__list">
				{COMMENTS?.map((comment) => (
					<div className="comment__box" key={comment?.id}>
						<div className="comment__profile-box">
							<div className="comment__email">{comment?.email}</div>
							<div className="comment__date">{comment?.createdAt}</div>
							<div className="comment__delete">삭제</div>
						</div>
						<div className="comment__content">{comment?.content}</div>
					</div>
				))}
			</div>
		</div>
	);
}
