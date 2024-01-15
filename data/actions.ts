"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newJournal(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  console.log(title + " " + content);

  try {
    await sql`
INSERT INTO journals (title, content)
VALUES (${title}, ${content})
`;
  } catch (err) {
    console.log("some error occured: ", err);
  }

  revalidatePath("/Journals");
  redirect("/");
}

export async function getJournals() {


   const Journals = await sql`
    SELECT id, title, content, createdAt, updatedAt
    FROM journals`;

    return Journals.rows

}
