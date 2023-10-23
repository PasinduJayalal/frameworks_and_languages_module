describe('Google', () => {
    it('Search for university webpage and check university logo is present', () => {
        cy.visit("https://www.google.co.uk?&hl=en&lr=lang_en")
        cy.get('button').contains("Accept all").click()
        cy.get('textarea[title="Search"]').type("{enter}")
        // * Hint: "Terms and Conditions" must be accepted
            //    Visit the site in a private browser - F12 - inspect 'Accept All' button and think about how to identify it
            //    click the 'Accept All' button
        // * Perform a google search for canterbury christ church university (with a spelling mistake)
            // type text into the right input box?
        // * Check that `canterbury.ac.uk` is somewhere in the returned list of searches and click it
        // * Follow the google search link to the main university webpage and check the logo is visible
        // * Hint: Cookie Popup will block your way. Your test should deal with this - interestingly there are multiple "Accept All Cookies" buttons, use the id with the css selection `#` to find the correct one
    })
})
/*
* Run with
	* With GUI: `npx cypress open`
	* Local Headless: `npx cypress run --spec cypress/google.spec.cy.js`
	* Container Headless: `make cypress_cmd CYPRESS_CMD="run --spec cypress/google.spec.cy.js"`
* https://docs.cypress.io/api/table-of-contents
	* `.visit("https://site")`
	* `.contains("text on webpage")`
	* `.scrollIntoView()`
	* `.should('be.visible')`
	* `.click()`
	* `.type("the text you want to type{enter}")`
	* `.get('???')`
		* `.get('input[title="???"]')`
		* `.get('#id_of_element')`
		* `.get('img[alt="???"')`
*/