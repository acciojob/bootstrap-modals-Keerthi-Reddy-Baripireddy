//your code here
describe("Testing Bootstrap Modal", () => {
  it("Opens Bootstrap Modal", () => {
    cy.visit("http://localhost:3000/main.html"); // Replace with the actual URL of your page
    cy.get("#open-modal").click(); // Click the button to open the modal
    // Add assertions or further interactions with the modal here
  });
});
