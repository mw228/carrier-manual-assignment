import DocumentationSection from "../components/DocumentationSection";
import SectionHeader from "../components/SectionHeader";
import Paragraph from "../components/Paragraph";
import DocumentationTable from "../components/DocumentationTable";
import Image from "../components/Img";
import ServiceLabelQR from "../assets/serviceLabelQR.png";
import StatusCodeQR from "../assets/statusCodeQR.png";
import "../css/DocumentationPage.css";
import AccordionSection from "../components/AccordionSection";
function DocumentationPage() {
  return (
    <main className="container documentation-page">
      <DocumentationSection>
        <div className="col-lg-2 order-2 order-md-1">
          <Image src={StatusCodeQR} alt="Status Code QR"></Image>
        </div>
        <div className="col-lg-10 order-1 order-md-2">
          <SectionHeader title="Status Code Table">
            <Paragraph>
              Scan QR code or reference troubleshooting guide in installation manual. The major
              status code is displayed in the first two digits of the display. The minor status code
              is displayed in the third digit. The major status code is also displayed on the LED
              indicator through the door with the first digit being the number of short flashes and
              the second digit being the number of long flashes.
            </Paragraph>
          </SectionHeader>
        </div>
      </DocumentationSection>
      <DocumentationSection>
        <AccordionSection id="status-codes" title="Status Codes">
          <div className="col-12 col-lg-4">
            <DocumentationTable
              columns={[
                {
                  key: "major",
                  label: "Major",
                },
                {
                  key: "minor",
                  label: "Minor",
                },
                {
                  key: "description",
                  label: "Description",
                },
              ]}
              rows={[
                {
                  major: "10",
                  minor: "1",
                  description: "L1 polarity fault",
                },
                {
                  major: "Rapid flash LED",
                  minor: "",
                  description: "",
                },
                {
                  major: "10",
                  minor: "2",
                  description: "Dissipation System Active, operate blower",
                },
                {
                  major: "otA",
                  minor: "",
                  description: "Firmware install in process",
                },
                {
                  major: "btL",
                  minor: "",
                  description: "Failed to load, retry firmware install",
                },
                {
                  major: "12",
                  minor: "1",
                  description: "W on at power up",
                },
                {
                  major: "13 (3hr)",
                  minor: "1",
                  description: "Limit Lockout",
                },
                {
                  major: {
                    value: "14 (3hr)",
                    rowSpan: 3,
                  },
                  minor: "1",
                  description: "Ignition Lockout after 4 consecutive ignition tries",
                },
                {
                  major: null,
                  minor: "2",
                  description: "Flame lost 3 times after 70s of heating",
                },
                {
                  major: null,
                  minor: "3",
                  description: "Lockout - 7 loss of flame events during a heat request",
                },
                {
                  major: {
                    value: "15 (3hr)",
                    rowSpan: 2,
                  },
                  minor: "1",
                  description: "Lockout - no Blower rpms detected",
                },
                {
                  major: null,
                  minor: "2",
                  description: "Lockout - Failed to reach 500rpm after retry",
                },
                {
                  major: "17",
                  minor: "1",
                  description: "BTM communication loss",
                },
                {
                  major: "21",
                  minor: "1",
                  description: "24VAC sensed on gas valve when shouldn't be, power reset only",
                },
                {
                  major: "22",
                  minor: "1",
                  description: "False flame",
                },
                {
                  major: {
                    value: "23",
                    rowSpan: 2,
                  },
                  minor: "4",
                  description: "LPS stuck closed",
                },
                {
                  major: null,
                  minor: "5",
                  description: "HPS stuck closed",
                },
                {
                  major: "24",
                  minor: "1",
                  description: "Fuse fault",
                },
              ]}
            />
          </div>
          <div className="col-12 col-lg-4">
            <DocumentationTable
              columns={[
                {
                  key: "major",
                  label: "Major",
                },
                {
                  key: "minor",
                  label: "Minor",
                },
                {
                  key: "description",
                  label: "Description",
                },
              ]}
              rows={[
                {
                  major: {
                    value: "25",
                    rowSpan: 6,
                  },
                  minor: "1",
                  description: "No program.",
                },
                {
                  major: null,
                  minor: "2",
                  description: "Corrupted program file, reprogram control.",
                },
                {
                  major: null,
                  minor: "4",
                  description: "Main program invalid, using backup program to operate.",
                },
                {
                  major: null,
                  minor: "5",
                  description: "Installer settings corrupted.",
                },
                {
                  major: null,
                  minor: "6",
                  description: "Wrong program, reprogram control.",
                },
                {
                  major: null,
                  minor: "",
                  description: {
                    value:
                      "If program in furnace control is missing, not recognized, or corrupted. Reprogram control with correct program # as listed on the rating plate. Replace control if issue remains.",
                    colSpan: 2,
                  },
                },
                {
                  major: {
                    value: "27",
                    rowSpan: 3,
                  },
                  minor: "1",
                  description: {
                    value:
                      "Program in super plug is missing, not recognized, or corrupted. Remove super plug then retry. If still have 27 code, try a different super plug. If still fails, replace control.",
                    rowSpan: 3,
                  },
                },
                {
                  major: null,
                  minor: "2",
                  description: null,
                },
                {
                  major: null,
                  minor: "3",
                  description: null,
                },
                {
                  major: {
                    value: "31",
                    rowSpan: 2,
                  },
                  minor: "6",
                  description:
                    "Open High pressure switch - HPS failed to close in 75s when high heat is required",
                },
                {
                  major: null,
                  minor: "7",
                  description: "High Heat Only for remainder of current cycle",
                },
                {
                  major: "32",
                  minor: "2",
                  description: "Open Low pressure switch (LPS)",
                },
                {
                  major: "33",
                  minor: "1",
                  description: "Main Limit circuit open.",
                },
              ]}
            />
          </div>
          <div className="col-12 col-lg-4">
            <DocumentationTable
              columns={[
                {
                  key: "major",
                  label: "Major",
                },
                {
                  key: "minor",
                  label: "Minor",
                },
                {
                  key: "description",
                  label: "Description",
                },
              ]}
              rows={[
                {
                  major: {
                    value: "34",
                    rowSpan: 5,
                  },
                  minor: "1",
                  description: "Ignition fault - four consecutive ignition trials.",
                },
                {
                  major: null,
                  minor: "5",
                  description: "Low heat flame lost before blower on-delay",
                },
                {
                  major: null,
                  minor: "6",
                  description: "Low heat flame lost after blower on-delay",
                },
                {
                  major: null,
                  minor: "7",
                  description: "High heat flame lost before blower on-delay",
                },
                {
                  major: null,
                  minor: "8",
                  description: "High heat flame lost after blower on-delay",
                },
                {
                  major: {
                    value: "41",
                    rowSpan: 3,
                  },
                  minor: "1",
                  description: "No blower RPM at start up",
                },
                {
                  major: null,
                  minor: "2",
                  description: "No RPM when blower motor is running",
                },
                {
                  major: null,
                  minor: "3",
                  description: "Failed to reach 500rpm at startup",
                },
                {
                  major: "43",
                  minor: "1",
                  description: "HPS closed before LPS",
                },
                {
                  major: {
                    value: "45",
                    rowSpan: 5,
                  },
                  minor: "1",
                  description: "Internal control error (1hr)",
                },
                {
                  major: null,
                  minor: "2",
                  description: "GVR relay not closing",
                },
                {
                  major: null,
                  minor: "3",
                  description: "Micro EEPROM error (1hr)",
                },
                {
                  major: null,
                  minor: "4",
                  description: "Micro loss of Comm",
                },
                {
                  major: null,
                  minor: "",
                  description: {
                    value: "For code 45, cycle power, if code 45 repeats, replace control.",
                    colSpan: 2,
                  },
                },
                {
                  major: {
                    value: "51",
                    rowSpan: 2,
                  },
                  minor: "1",
                  description: "OAT - Open",
                },
                {
                  major: null,
                  minor: "2",
                  description: "OAT - Short",
                },
                {
                  major: {
                    value: "52",
                    rowSpan: 2,
                  },
                  minor: "1",
                  description: "SAT - Open",
                },
                {
                  major: null,
                  minor: "2",
                  description: "SAT - Short",
                },
                {
                  major: {
                    value: "53",
                    rowSpan: 2,
                  },
                  minor: "1",
                  description: "RAT - Open",
                },
                {
                  major: null,
                  minor: "2",
                  description: "RAT - Short",
                },
              ]}
            />
          </div>
        </AccordionSection>
      </DocumentationSection>
      <DocumentationSection>
        <div className="col-12">
          <SectionHeader title="Menu Navigation">
            <Paragraph>
              Scroll through main menu by pressing the MENU/SELECT button. Press NEXT/OPTION button
              to view current setting (will flash on display) and to scroll through setting options.
              Press MENU/SELECT button to save new setting and return to main menu. The display will
              flash to confirm setting selection before returning to the main menu.
            </Paragraph>
          </SectionHeader>
        </div>
      </DocumentationSection>
      <DocumentationSection>
        <div className="col-md-6">
          <AccordionSection id="system-status" title="System Status Table">
            <DocumentationTable
              columns={[
                {
                  key: "display",
                  label: "Display",
                },
                {
                  key: "description",
                  label: "Description",
                },
              ]}
              rows={[
                {
                  display: "idL",
                  description: "Idle / Standby Mode",
                },
                {
                  display: "Ht2",
                  description: "High Heating Mode",
                },
                {
                  display: "Ht1",
                  description: "Low Heating Mode",
                },
                {
                  display: "CL2",
                  description: "High Cooling Mode",
                },
                {
                  display: "CL1",
                  description: "Low Cooling Mode",
                },
                {
                  display: "HPd",
                  description: "Heat Pump Defrost Mode",
                },
                {
                  display: "CFn, CF2, CF3",
                  description: "Continuous Fan Mode",
                },
                {
                  display: "##.#",
                  description: "Active Status Code",
                },
              ]}
            />
          </AccordionSection>
        </div>
        <div className="col-md-6">
          <AccordionSection id="main-menu" title="Main Menu Table">
            <DocumentationTable
              columns={[
                {
                  key: "display",
                  label: "Display",
                },
                {
                  key: "description",
                  label: "Description",
                },
              ]}
              rows={[
                {
                  display: "idL, Ht, ...",
                  description: "Current System Status",
                },
                {
                  display: "FLt",
                  description: "Last 7 faults that occurred",
                },
                {
                  display: "tO",
                  description: "Temperature Display ON/OFF",
                },
                {
                  display: "Ht",
                  description: "Heating Blower speed",
                },
                {
                  display: "CL2, CL1",
                  description: "Cooling & Heat Pump Blower speed",
                },
                {
                  display: "CFn",
                  description: "Continuous Fan speed",
                },
                {
                  display: "Hod",
                  description: "Heat OFF delay",
                },
                {
                  display: "Cod",
                  description: "Cool OFF delay",
                },
                {
                  display: "Htt",
                  description: "Heating thermostat type",
                },
                {
                  display: "Ctt",
                  description: "Cooling thermostat type",
                },
                {
                  display: "dir",
                  description: "Orientation upflow or downflow",
                },
                {
                  display: "Air",
                  description: "CFM display ON/OFF",
                },
                {
                  display: "nF",
                  description: "Program # and Software version",
                },
                {
                  display: "Ct",
                  description: "Component test",
                },
                {
                  display: "rSt",
                  description: "Reset All Installer Settings to Factory Defaults",
                },
              ]}
            />
          </AccordionSection>
        </div>
      </DocumentationSection>
      <DocumentationSection>
        <div className="col-md-6">
          <SectionHeader title="Component Test">
            <Paragraph>
              To initiate the component test sequence, the control must be in (idL) mode. No
              thermostat demands (W, Y, G). Select component test (Ct) from the menu select buttons
              to start the component test sequence. Once initiated, the furnace control will perform
              the following sequence:
            </Paragraph>

            <Paragraph>
              <strong>Err</strong> during a step means issue detected.
            </Paragraph>

            <ol>
              <li>
                <strong>PUr</strong> – Inducer ON High
              </li>
              <li>
                <strong>HSI</strong> – After waiting 10s, HSI ON for 15s.
              </li>
              <li>
                <strong>Fn</strong> – After HSI, then Blower ON for 15s.
              </li>
              <li>
                <strong>End</strong> – After Blower, Inducer ON Low for 10s. The test ends.
              </li>
            </ol>
          </SectionHeader>
        </div>
        <div className="col-md-6">
          <SectionHeader title="Service Label">
            <Image src={ServiceLabelQR} alt="Service Label QR Code"></Image>
            <div className="mt-3">
              <Paragraph>
                All copyrighted materials used herein are the property of their respective owners.
              </Paragraph>
            </div>
          </SectionHeader>
        </div>
      </DocumentationSection>
    </main>
  );
}

export default DocumentationPage;
