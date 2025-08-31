import React, { useState, useEffect, useRef } from "react";
const initialData = {
  selectAll: false,
  categories: [
    {
      name: "Fruits",
      checked: false,
      indeterminate: false,
      children: [
        { name: "Apple", checked: false },
        { name: "Banana", checked: false },
        { name: "Orange", checked: false },
      ],
    },
    {
      name: "Vegetables",
      checked: false,
      indeterminate: false,
      children: [
        { name: "Carrot", checked: false },
        { name: "Broccoli", checked: false },
        { name: "Spinach", checked: false },
      ],
    },
  ],
};

function NestedCheckbox() {
  const [data, setData] = useState(initialData);
  const selectAllRef = useRef();
  useEffect(() => {
    const allChecked = data.categories.every((cat) => cat.checked);
    const someChecked = data.categories.some(
      (cat) => cat.checked || cat.indeterminate
    );
    selectAllRef.current.indeterminate = !allChecked && someChecked;
  }, [data]);
  const handleSelectAll = () => {
    const newChecked = !data.selectAll;
    const newCategories = data.categories.map((cat) => ({
      ...cat,
      checked: newChecked,
      indeterminate: false,
      children: cat.children.map((child) => ({ ...child, checked: newChecked })),
    }));
    setData({ selectAll: newChecked, categories: newCategories });
  };
  const handleParentChange = (index) => {
    const newCategories = [...data.categories];
    const parent = newCategories[index];
    const newChecked = !parent.checked;

    parent.checked = newChecked;
    parent.indeterminate = false;
    parent.children = parent.children.map((child) => ({
      ...child,
      checked: newChecked,
    }));

    setData({ ...data, categories: newCategories });
  };
  const handleChildChange = (parentIndex, childIndex) => {
    const newCategories = [...data.categories];
    const parent = newCategories[parentIndex];
    const child = parent.children[childIndex];

    child.checked = !child.checked;

    const allChildrenChecked = parent.children.every((c) => c.checked);
    const someChildrenChecked = parent.children.some((c) => c.checked);

    parent.checked = allChildrenChecked;
    parent.indeterminate = !allChildrenChecked && someChildrenChecked;

    setData({ ...data, categories: newCategories });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Nested Checkboxes</h2>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            ref={selectAllRef}
            checked={data.selectAll}
            onChange={handleSelectAll}
          />
          <span>Select All</span>
        </label>
      </div>
      {data.categories.map((category, i) => (
        <div key={i} className="mb-3 pl-4 border-l-2 border-gray-200">
          <label className="flex items-center space-x-2 font-semibold">
            <input
              type="checkbox"
              checked={category.checked}
              ref={(el) => {
                if (el) el.indeterminate = category.indeterminate;
              }}
              onChange={() => handleParentChange(i)}
            />
            <span>{category.name}</span>
          </label>

          <div className="pl-6 mt-2">
            {category.children.map((child, j) => (
              <label key={j} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={child.checked}
                  onChange={() => handleChildChange(i, j)}
                />
                <span>{child.name}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NestedCheckbox;
