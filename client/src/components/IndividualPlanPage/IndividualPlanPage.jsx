import { useState } from "react";
import classes from "./individual-plan-page.module.scss";
import { Box, Tab } from "@mui/material";
import { PLAN_SECTIONS } from "../../shared/constants";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CommonInfoForm from "./CommonInfoForm/CommonInfoForm";
import EducationalAndMethodicalWorks from "./EducationalAndMethodicalWorks/EducationalAndMethodicalWorks";

const IndividualPlanPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switchSections = (id) => {
    switch (id) {
      case "1": {
        return <CommonInfoForm />;
      }
      case "3": {
        return <EducationalAndMethodicalWorks />;
      }
      default: {
        return <p>{`Такого раздела нет:(`}</p>;
      }
    }
  };

  return (
    <div className={classes["individual-plan-page"]}>
      <Box
        sx={{
          width: "70%",
          typography: "body1",
          bgcolor: "white",
          marginBottom: "70px",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {PLAN_SECTIONS.map((section) => (
                <Tab
                  label={section.title}
                  value={section.id}
                  key={section.id}
                />
              ))}
            </TabList>
          </Box>
          {PLAN_SECTIONS.map((section) => (
            <TabPanel
              value={section.id}
              key={section.id}
              className={classes["individual-plan-page__tabs"]}
            >
              <h1 className={classes["individual-plan-page__tabs-title"]}>
                {section.title}
              </h1>
              {switchSections(section.id)}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
};

export default IndividualPlanPage;
