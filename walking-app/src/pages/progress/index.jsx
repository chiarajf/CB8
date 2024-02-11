import React from "react";
import AppShellComponent from "@/components/appShellComponent/AppShellComponent";
import ProgressComponent from "@/components/progressComponent/ProgressComponent";

const Progress = () => {
  return (
    <div>
      <AppShellComponent>
        <ProgressComponent />
      </AppShellComponent>
    </div>
  );
};

export default Progress;
