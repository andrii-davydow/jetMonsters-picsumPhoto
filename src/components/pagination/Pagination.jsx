import ReactPaginate from 'react-paginate';
import './pagination.scss';
const Pagination = ({ pageCount, onPageChange }) => {
	return (
		<nav className="pagination-nav">
			<ul className="pagination-list">
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={onPageChange}
					pageRangeDisplayed={2}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel="<"
					renderOnZeroPageCount={null}
					className="pagination-list"
				/>
			</ul>
		</nav>
	);
};
export default Pagination;
