import { redirect } from "next/navigation";

export default async function TendersPage() {
  redirect("/work-in-dihlabeng/tenders/tender-adverts");

  return null;
}
