import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PostListProps {
	hasNavigation?: boolean;
}

type TabType = 'all' | 'my';

export default function PostList({ hasNavigation = true }: PostListProps) {
	const [activeTab, setActiveTab] = useState<TabType>('all');

	return (
		<>
			{hasNavigation && (
				<div className="post__navigation">
					<div
						role="presentation"
						onClick={() => setActiveTab('all')}
						className={activeTab === 'all' ? 'post__navigation--active' : ''}
					>
						전체
					</div>
					<div
						role="presentation"
						onClick={() => setActiveTab('my')}
						className={activeTab === 'my' ? 'post__navigation--active' : ''}
					>
						나의 글
					</div>
				</div>
			)}
			<div className="post__list">
				{[...Array(10)].map((e, index) => (
					<div key={index} className="post__box">
						<Link to={`/posts/${index}`}>
							<div className="post__profile-box">
								<div className="post__profile" />
								<div className="post__author-name">패스트캠퍼스</div>
								<div className="post__date">2023.07.08 토요일</div>
							</div>
							<div className="post__title">게시글 {index + 1}</div>
							<div className="post__text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis cupiditate repudiandae ab delectus
								eveniet nesciunt rerum eaque ea quod, omnis similique, nulla ullam aliquam enim. Minus, optio eos voluptate
								eligendi sequi ipsa voluptates ratione, sed nisi modi debitis porro eveniet tempora vero deleniti perferendis
								asperiores? Id porro nisi, fugit facilis veniam maxime assumenda repellat a dolorem consequatur aliquid
								necessitatibus adipisci dicta mollitia eaque eveniet ad excepturi? Id exercitationem vitae blanditiis
								officiis, ipsum veniam. Optio odit animi, commodi possimus delectus, minus incidunt cupiditate consectetur
								dolorem nulla maiores autem dolore unde quia veniam nobis nam ipsa ipsum dignissimos numquam voluptates
								repudiandae.
							</div>
							<div className="post__utils-box">
								<div className="post__delete">삭제</div>
								<div className="post__edit">
									<Link to={`/posts/edit/1`}></Link>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
