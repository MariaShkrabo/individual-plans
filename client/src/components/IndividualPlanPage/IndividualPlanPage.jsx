import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import classes from "./individual-plan-page.module.scss";
import { PLAN_SECTIONS } from "../../shared/constants";
import CommonInfoForm from "./CommonInfoForm/CommonInfoForm";
import EducationalAndMethodicalWorks from "./EducationalAndMethodicalWorks/EducationalAndMethodicalWorks";
import OrganizationalAndMethodicalWorks from "./OrganizationalAndMethodicalWorks/OrganizationalAndMethodicalWorks";
import InformationAndEducationalWorks from "./InformationAndEducationalWorks/InformationAndEducationalWorks";
import ScientificAndResearchWorks from "./ScientificAndResearchWorks/ScientificAndResearchWorks";
import CustomButton from "../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../shared/enums";
import EducationalWorks from "./EducationalWorks/EducationalWorks";

const IndividualPlanPage = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switchSections = (id) => {
    switch (id) {
      case "1": {
        return <CommonInfoForm />;
      }
      case "2": {
        return <EducationalWorks />;
      }
      case "3": {
        return <EducationalAndMethodicalWorks />;
      }
      case "4": {
        return <OrganizationalAndMethodicalWorks />;
      }
      case "5": {
        return <ScientificAndResearchWorks />;
      }
      case "6": {
        return <InformationAndEducationalWorks />;
      }
      default: {
        return <p>{`Такого раздела нет:(`}</p>;
      }
    }
  };

  const back = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <div className={classes["individual-plan-page"]}>
      <Box
        sx={{
          width: "70%",
          typography: "body1",
          bgcolor: "white",
          marginBottom: "10px",
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
      <CustomButton
        className={classes["individual-plan-page__button_back"]}
        color={colors.secondary}
        theme={buttonThemes.medium}
        type="button"
        onClick={back}
      >
        ← Назад на главную страницу
      </CustomButton>
    </div>
  );
};

export default IndividualPlanPage;
