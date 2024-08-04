"use client";

import { addTenderResultsAction } from "@/actions/tenders.action";
import { useEffect } from "react";

export const TenderResults = () => {
  useEffect(() => {
    const addTenderResults = async () => {
      const rows = await addTenderResultsAction();

      return rows;
    };

    addTenderResults();
  }, []);

  return null;
};
