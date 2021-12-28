import App from "../containers/App";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("Testing", async () => {
  // Render the page
  render(<App />);

  // Waiting for page to finish loading completely before initiating tests
  await waitFor(() => screen.getByPlaceholderText(/search/));

  // Get search bar element to later type into it by firing the event
  const searchBar = await screen.getByPlaceholderText(/search/);

  // Get all cards by their test id, test ids are just sequential numbers for the cards
  // when the cards are first generated
  const cards = await screen.findAllByTestId(/^\d$/);

  // Get the server name of the first card, whose index is 0
  const searchText = cards[0].querySelector("h2").textContent;

  // use the server name extracted previously to fire an event
  // event mimics typing into the search bar
  fireEvent.change(searchBar, { target: { value: searchText } });

  // Get all cards by their test id after the search box has been typed into
  const cardsFoundAfterSearch = await screen.findAllByTestId(/^\d$/);

  // Loop over cards after search filter has been applied
  cardsFoundAfterSearch.forEach((card) => {
    // get each server name from the h2 element
    const serverName = card.querySelector("h2").textContent;
    // if server name doesn't match the search text typed into search box
    // then the search function is not working properly
    if (serverName !== searchText) {
      throw new Error("Found a card whose name doesn't match the search text");
    }
  });
});
