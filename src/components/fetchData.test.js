import fetchData from './fetchData';

describe("fetchData", () => {
    it("fetches APOD data as an array", async () => {
      const fetchedData = await fetchData();
      expect(Array.isArray(fetchedData)).toBe(true);
    });

    it("fetches the past 2 weeks APOD data", async () => {
      const fetchedData = await fetchData();
      expect(fetchedData.length).toBe(14);
    });

    it("each day within the array should be stored as an object", async () => {
      const fetchedData = await fetchData();
      for (const data of fetchedData) {
        expect(data && typeof data === "object").toBe(true);
      }
    });

  });