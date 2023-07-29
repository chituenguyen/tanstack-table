import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
  initialData: InitialData;
  onInitialDataChange: (newData: InitialData) => void;
}

const Tab: React.FC<TabProps> = ({
  tabs,
  initialData,
  onInitialDataChange,
}) => {
  // toast.configure();
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabChange = (tabId: number) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tabId ? null : tabId));
  };

  const isHeaderSelected = (header: string) => {
    return initialData.data.some((item) => item.header === header);
  };

  const handleRemoveCheckbox = (header: string) => {
    const newData = {
      data: initialData.data.filter((item) => item.header !== header),
    };
    onInitialDataChange(newData);
  };
  const handleAddCheckbox = (item: TabItem) => {
    if (initialData.data.length >= 8) {
      // bởi vì còn 2 trường id và name nên là 8
      toast("Maximum number of filter fields already selected", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const newData = {
        data: [...initialData.data, item],
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
            className={`${activeTab === tab.id ? "buttonTab-active" : "buttonTab"}`}
            onClick={() => handleTabChange(tab.id)}
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
              <div key={item.accessorKey} className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isHeaderSelected(item.header)}
                  onChange={() =>
                    isHeaderSelected(item.header)
                      ? handleRemoveCheckbox(item.header)
                      : handleAddCheckbox(item)
                  }
                />
                <h3 className="truncate">{item.header}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="px-2 flex text-white gap-2">
        {initialData.data.slice(2).map((item, index) => (
          <button
            key={index}
            className="button-check"
            onClick={() => handleRemoveCheckbox(item.header)}
          >
            {item.header}
          </button>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Tab;
