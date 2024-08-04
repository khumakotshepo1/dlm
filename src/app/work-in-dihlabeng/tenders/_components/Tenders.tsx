"use client";

import { addTendersAction } from "@/actions/tenders.action";
import { useEffect } from "react";

export const Tenders = () => {
  useEffect(() => {
    const addTenders = async () => {
      const rows = await addTendersAction();

      return rows;
    };

    addTenders();
  }, []);

  return null;
};
