import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FlexBox } from "."
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons"

export const Pagination = ({ limit, page, onLimitChange, onPageChange }: {
  limit: string,
  page: string,
  onLimitChange: (limit: string) => void,
  onPageChange: (page: string) => void
}) => {
  return (
    <FlexBox gap='1rem' justifyContent="flex-end">
      <select className='button' value={limit} onChange={e => onLimitChange(e.target.value)} name="page size" id="limit">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button className='button' disabled={page === '1'} onClick={() => onPageChange((Number(page) - 1).toString())}>
        <FlexBox alignItems='center' gap=".5rem">
          <FontAwesomeIcon icon={faBackward} />
          Previous
        </FlexBox>
      </button>
      <button className='button' onClick={() => onPageChange((Number(page) + 1).toString())}>
        <FlexBox alignItems='center' gap='.5rem'>
          Next
          <FontAwesomeIcon icon={faForward} />
        </FlexBox>
      </button>
    </FlexBox>
  )
}