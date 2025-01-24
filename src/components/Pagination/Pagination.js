import React from 'react'

const Pagination = ({rowsPerPage,handleChangePage,handleChangeRowsPerPage,filteredMembers,page,endIndex}) => {
  return (
    <>
     <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <label>
            Rows per page:
            <select
              className="form-control d-inline-block w-auto ml-2"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
        <div>
          <button
            className="btn btn-secondary btn-sm mr-2"
            disabled={page === 0}
            onClick={() => handleChangePage(page - 1)}
          >
            Previous
          </button>
          <span>Page {page + 1}</span>
          <button
            className="btn btn-secondary btn-sm ml-2"
            disabled={endIndex >= filteredMembers.length}
            onClick={() => handleChangePage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination