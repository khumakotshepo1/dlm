import { sql } from "@/database";
import { cache } from "react";

export const getTenders = cache(async () => {
  try {
    const { rows } = await sql.query(`SELECT * FROM tenders`);
    return rows;
  } catch (error) {
    console.error(error);
  }
});

export const getTenderByYear = cache(async (year: number, month: number) => {
  try {
    const { rows } = await sql.query(
      `SELECT * FROM tenders WHERE EXTRACT(YEAR FROM closing_date) = $1 AND EXTRACT(MONTH FROM closing_date) >= $2`,
      [year, month]
    );
    return rows;
  } catch (error) {
    console.error(error);
  }
});

export const getTenderResults = cache(async () => {
  try {
    const { rows } = await sql.query(`SELECT * FROM tender_results`);
    return rows;
  } catch (error) {
    console.error(error);
  }
});
