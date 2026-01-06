import * as React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Section,
} from "@react-email/components";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  project: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  project,
}) => (
  <Html>
    <Body
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f6f6f6",
        margin: 0,
        padding: 0,
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "20px",
        }}
      >
        <Heading
          style={{
            color: "#333333",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          New Website Contact Inquiry
        </Heading>

        <Section style={{ marginBottom: "20px" }}>
          <Heading
            style={{
              color: "#555555",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Customer Information:
          </Heading>

          <Text style={{ margin: "5px 0", color: "#333333" }}>
            <strong>Full Name:</strong> {fullName}
          </Text>

          <Text style={{ margin: "5px 0", color: "#333333" }}>
            <strong>Email Address:</strong> {email}
          </Text>

          <Text style={{ margin: "5px 0", color: "#333333" }}>
            <strong>Phone Number:</strong> {phone}
          </Text>
        </Section>

        <Section>
          <Heading
            style={{
              color: "#555555",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Project Details:
          </Heading>

          <Text style={{ color: "#333333", lineHeight: "1.5" }}>{project}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
