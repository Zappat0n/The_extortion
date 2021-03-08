const mockGetScores = () => ({ result: [{ user: 'A', score: 1 }, { user: 'B', score: 3 }, { user: 'C', score: 2 }] });
const mockGetManyScores = () => ({
  result: [
    { user: 'A', score: 1 },
    { user: 'B', score: 3 },
    { user: 'C', score: 2 },
    { user: 'D', score: 4 },
    { user: 'E', score: 5 },
    { user: 'F', score: 6 },
    { user: 'G', score: 7 },
    { user: 'H', score: 8 },
    { user: 'I', score: 9 },
    { user: 'J', score: 10 },
    { user: 'K', score: 11 },
  ],
});

export { mockGetScores, mockGetManyScores };
