import { Link } from 'react-router-dom';

export default function PostDetail() {
	return (
		<>
			<div className="post__detail">
				<div className="post__box">
					<div className="post__title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
				</div>
				<div className="post__profile-box">
					<div className="post__profile" />
					<div className="post__author-name">패스트캠퍼스</div>
					<div className="post__date">2023.07.08 토요일</div>
				</div>
				<div className="post__utils-box">
					<div className="post__delete">삭제</div>
					<div className="post__edit">
						<Link to={`/posts/edit/1`}>수정</Link>
					</div>
				</div>
				<div className="post__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis cupiditate repudiandae ab delectus eveniet
					nesciunt rerum eaque ea quod, omnis similique, nulla ullam aliquam enim. Minus, optio eos voluptate eligendi sequi
					ipsa voluptates ratione, sed nisi modi debitis porro eveniet tempora vero deleniti perferendis asperiores? Id porro
					nisi, fugit facilis veniam maxime assumenda repellat a dolorem consequatur aliquid necessitatibus adipisci dicta
					mollitia eaque eveniet ad excepturi? Id exercitationem vitae blanditiis officiis, ipsum veniam. Optio odit animi,
					commodi possimus delectus, minus incidunt cupiditate consectetur dolorem nulla maiores autem dolore unde quia
					veniam nobis nam ipsa ipsum dignissimos numquam voluptates repudiandae.
				</div>
			</div>
		</>
	);
}
