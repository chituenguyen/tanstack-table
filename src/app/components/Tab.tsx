import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import CheckboxInput from "./Checkbox";

interface TabItem {
  id: number;
  name: string;
  data: Array<{
    header: string;
    accessorKey: string;
    sorted: boolean;
  }>;
}

interface InitialData {
  data: Array<{
    header: string;
    accessorKey: string;
    sorted: boolean;
  }>;
}

interface TabProps {
  tabs: TabItem[];
  initialData: InitialData,
  onInitialDataChange: (newData: InitialData) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, initialData,onInitialDataChange }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const handleTabChange = (tabId: number) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tabId ? null : tabId));
  };
  const handleCheckboxChange = (item:any, isChecked: boolean) => {
    console.log(item, isChecked)
    if (isChecked) {
      const newData = {
        data: [...initialData.data, item],
      };
      onInitialDataChange(newData);
    }
    else{
      const newData = {
        data: initialData.data.filter((i) => i.accessorKey !== item.accessorKey),
      };
      onInitialDataChange(newData);
    }
  };
  return (
    <div className="bg-surface-1">
      <div className="flex gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id ? "buttonTab-active" : "buttonTab"
            }`}
            onClick={() => handleTabChange(tab.id)}
            type="button"
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4 bg-surface-1 rounded-b-md mt-4 text-xsm">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`grid grid-cols-4 ${
              activeTab === tab.id ? "max-h-fit" : "max-h-0"
            } overflow-hidden`}
          >
            {tab.data.map((item) => (
              <CheckboxInput label={item.header} name={item.accessorKey} initialData={initialData} onChange={(isChecked) =>
                handleCheckboxChange(item, isChecked)
              }/>
            ))}
          </div>
        ))}
      </div>
      <div className="px-2 flex text-white gap-2">
        {initialData.data.slice(2).map((item, index) => (
          <button
            key={index}
            className="button-check"
            onClick={() => handleCheckboxChange(item, false)}
            type="button"
          >
            {item.header}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
