import styled from "./contact.module.css";
import Form from "@/components/form/Form";
export default async function Page() {
  return (
    <main className={styled.container}>
      <div className={styled.contact_form}>
        <h2>Contact Us</h2>
        <Form />
      </div>
    </main>
  );
}
