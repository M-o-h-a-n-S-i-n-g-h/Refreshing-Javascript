import React from "react";
import { Link } from "react-router-dom";

const Router = () => {
   return (
     <div className="center">
        <div className="link">
           <Link to="/didMount">
              ComponentDidMount
           </Link>
        </div>
        <div className="link">
           <Link to="/didUpdate">
              ComponentUpdate
           </Link>
        </div>
        <div className="link">
           <Link to="/controlledForm">
              ControlledForm
           </Link>
        </div>
        <div className="link">
           <Link to="/errorHandling">
              ErrorHandler
           </Link>
        </div>
        <div className="link">
           <Link to="/conditionRendering">
              ConditionRendering
           </Link>
        </div>
        <div className="link">
           <Link to="/liftState">
              LiftState
           </Link>
        </div>
        <div className="link">
           <Link to="/handlingRef">
              HandlingRef
           </Link>
        </div>
        <div className="link">
           <Link to="/about">
              About
           </Link>
        </div>
        <div className="link">
           <Link to="/posts">
              Api Handler
           </Link>
        </div>
     </div>
   )
}

export default Router;