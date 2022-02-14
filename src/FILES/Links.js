import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Home } from "./HOME PAGE/Home";
import { createContext, useEffect, useState } from "react";
import { Content } from "./PROJECT PAGE/Content";
import { Data } from "./Data";

export const context = createContext(null);

export const Links = React.forwardRef((props, ref) => {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const [TbMenuBar, setTbMenuBar] = useState(false);

  // TO GET PROJECT DETAILS:
  const [PrjDetails, setPrjDetails] = useState("");

  useEffect(() => {
    setPrjDetails(Data);
  }, []);

  // CONTEXT
  const obj = { TbMenuBar, setTbMenuBar, PrjDetails, setPrjDetails };

  return (
    <context.Provider value={obj}>
      <section className="linkCntr PDFMainCntr">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:project">
            <Content />
          </Route>
        </Switch>
      </section>
    </context.Provider>
  );
});
