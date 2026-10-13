import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "../config/site.ts";

describe("Contact Information & Site Configuration", () => {
  test("Email is strictly rj751054@gmail.com", () => {
    assert.strictEqual(siteConfig.email, "rj751054@gmail.com");
    assert.notStrictEqual(siteConfig.email, "rushi04j@gmail.com");
  });

  test("LinkedIn profile URL is correctly configured", () => {
    assert.strictEqual(
      siteConfig.linkedinUrl,
      "https://www.linkedin.com/in/rushikesh-joshi2004/"
    );
  });

  test("GitHub profile URL is configured", () => {
    assert.strictEqual(siteConfig.githubUrl, "https://github.com/Rushi04j");
  });

  test("Identity details are properly populated", () => {
    assert.strictEqual(siteConfig.name, "Rushikesh Joshi");
    assert.strictEqual(siteConfig.role, "Associate Solution Consultant");
    assert.strictEqual(siteConfig.company, "FireFlink");
  });

  test("Projects section is removed from navItems", () => {
    const hasProjectsNav = siteConfig.navItems.some(
      (item) => item.label.toLowerCase() === "projects" || item.href === "#projects"
    );
    assert.strictEqual(hasProjectsNav, false);
  });
});
