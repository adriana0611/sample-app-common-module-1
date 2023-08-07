import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";
import { Module } from "sample-app-shared/dist/esm/components/Module";

// -----------------------------------------------------------------

export const CommonModule1 = () => {
  const { name } = useSampleAppContext();

  return (
    <Module name={"Commmon Module 1"}>{`Commmon Module 1 - ${name}`}</Module>
  );
};
