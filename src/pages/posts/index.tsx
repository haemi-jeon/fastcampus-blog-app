import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PostList from 'components/PostList';

export default function PostPage() {
	return (
		<>
			<Header />
			<Carousel />
			<PostList hasNavigation={false} />
			<Footer />
		</>
	);
}
