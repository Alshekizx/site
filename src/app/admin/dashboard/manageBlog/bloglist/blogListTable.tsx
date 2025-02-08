"use client";



interface Blog {
  id: number;
  title: string;
  uploadDate: string;
}

const BlogListTable = ({ blogs, onEdit, onDelete }: { blogs: Blog[]; onEdit: (id: number) => void; onDelete: (id: number) => void }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
          <th className="border border-gray-300 px-4 py-2">Upload Date</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{blog.uploadDate}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              <button
                onClick={() => onEdit(blog.id)}
                className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogListTable;