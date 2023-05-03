import Article from '../article/Article';
import { blogData_1, blogData_2, blogData_3, blogData_4, blogData_5 } from '../blog/BlogData';

const Blog = () => (
  <>
    <Article title={blogData_1?.title} image={blogData_1?.image} content={blogData_1?.content} />
    <Article title={blogData_2?.title} image={blogData_2?.image} content={blogData_2?.content} />
    <Article title={blogData_3?.title} image={blogData_3?.image} content={blogData_3?.content} />
    <Article title={blogData_4?.title} image={blogData_4?.image} content={blogData_4?.content} />
    <Article title={blogData_5?.title} image={blogData_5?.image} content={blogData_5?.content} />
  </>
);
export default Blog;
