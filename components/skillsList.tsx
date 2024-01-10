import React, { ReactNode } from "react";
import skills_styles from "./skills.module.css";

interface SkillListProps {
  children: ReactNode;
  shaded?: boolean;
}

const SkillsList = ({ children, shaded = false }: SkillListProps) => {
  return (
    <div
      className={
        shaded ? skills_styles.shadedCellWrapper : skills_styles.cellWrapper
      }
    >
      <div className={skills_styles.cellSpacer} />
      <ul>{children}</ul>
      <div className={skills_styles.cellSpacer} />
    </div>
  );
};

export default SkillsList;
