import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/App.css";
import Lang from "./components/Lang/Lang";
import { TabsData } from "./constants/static";
import { calculateEmissionAirplane, resetDataAirplane } from "./store/slices/Airplane.slice";
import { calculateEmissionPublic, resetDataPublic } from "./store/slices/Public.slice";
import { calculateEmissionHouseHold, resetDataHousehold } from "./store/slices/Household.slice";
import { RootState } from "./store/store";
import React from "react";
import { calculateEmissionSecondary, resetDataSecondary } from "./store/slices/Secondary.slice";
import { calculateEmissionPrivate, resetDataPrivate } from "./store/slices/Private.slice";
import ResultItem from "./components/Result/ResultItem";
function App() {
  const dispatch = useDispatch();
  const initialState = {
    airplane: 0,
    private: 0,
    public: 0,
    secondary: 0,
    household: 0,
  };
  const [results, setResults] = React.useState(initialState);
  const [resetKey, setResetKey] = React.useState(0)
  const airplaneEmission = useSelector((state: RootState) => state.Airplane.allEmission);
  const publicEmission = useSelector((state: RootState) => state.Public.emissionResult);
  const secondaryEmission = useSelector((state: RootState) => state.Secondary.emissionResult);
  const householdEmission = useSelector((state: RootState) => state.House.emissionResult);
  const privateEmission = useSelector((state: RootState) => state.Private.emissionResult);


  const handleCalculate = () => {
    dispatch(calculateEmissionAirplane());
    dispatch(calculateEmissionPublic());
    dispatch(calculateEmissionHouseHold());
    dispatch(calculateEmissionSecondary());
    dispatch(calculateEmissionPrivate());
    setResults({
      airplane: airplaneEmission,
      public: publicEmission,
      secondary: secondaryEmission,
      household: householdEmission,
      private: privateEmission,
    });

  };

  const resetCalculate = () => {
    setResults({
      airplane: 0,
      public: 0,
      secondary: 0,
      household: 0,
      private: 0,
    });
    dispatch(resetDataAirplane())
    dispatch(resetDataHousehold())
    dispatch(resetDataPrivate())
    dispatch(resetDataPublic())
    dispatch(resetDataSecondary())
    setResetKey(prev => prev + 1)


  }

  return (
    <div className="container">
      <div className="innercointainer">
        <Tabs variant="soft-rounded" w="100%">
          <TabList
            className="tabslist"
            mb="1em"
            justifyContent="space-around"
            alignItems="center"
            gap={20}
            border="1px solid #dfdfdf"
            padding={5}
            borderRadius={30}
            bg="aliceblue"
          >
            {TabsData.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  _selected={{ bg: "#c8e9f9", borderRadius: "30px" }}
                  padding={5}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img className="tabicons" src={tab.img} alt={tab.text} />
                    <p style={{ fontSize: "12px", marginTop: "10px" }}>
                      {tab.text}
                    </p>
                  </div>
                </Tab>
              );
            })}
            <Lang />
          </TabList>
          <div className="containernext">
            <div className="containerbody">
              <TabPanels>
                {TabsData.map(({ Component, id }) => {
                  return (
                    <TabPanel key={id}>
                      <div key={id} className="containercontent">
                        <Component key={resetKey} />
                      </div>
                    </TabPanel>
                  );
                })}
                <div className="actions">
                  <Button colorScheme="gray" onClick={resetCalculate}>Reset</Button>
                  <Button
                    colorScheme="teal"
                    onClick={handleCalculate}
                  >
                    Calculate
                  </Button>
                </div>
              </TabPanels>
            </div>
            <div className="containerresult">
              <h2>Emission Results</h2>
              <ResultItem text="HouseHold" value={results.household} />
              <ResultItem text="Private Transport" value={results.private} />
              <ResultItem text="Airplane" value={results.airplane} />
              <ResultItem text="Public Transport" value={results.public} />
              <ResultItem text="Secondary" value={results.secondary} />
              <ResultItem text="Overall" value={results.secondary + results.airplane + results.household + results.public + results.private} />
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}


export default App;