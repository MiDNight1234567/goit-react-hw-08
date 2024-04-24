import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";

import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onFilter = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
