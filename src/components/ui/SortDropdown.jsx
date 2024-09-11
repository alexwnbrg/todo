const SortDropdown = ({ setSortOption }) => {
  const sortOptionList = [
    "Due Date (ASC)",
    "Due Date (DESC)",
    "Alphabetical",
    "Important",
  ];
  return (
    <div className="flex flex-col gap-1">
      <label>Sort By:</label>
      <select
        className="outline outline-DarkPurple outline-solid rounded-2xl p-2 w-fit text-sm"
        onChange={(e) => setSortOption(e.target.value)}
      >
        {sortOptionList.map((op) => {
          return (
            <option value={op} key={op}>
              {op}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortDropdown;
