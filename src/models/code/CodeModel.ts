export interface StereotypingCode {
  codeId: number;
  title: string;
  codeDetail: string;
}

export const CodeMock: StereotypingCode[] = [
  {
    codeId: 0,
    title: 'Mui Styled',
    codeDetail: `const ExplanationText = styled(Typography)({
    marginTop: '10px',
     fontSize: '15px',
     fontWeight: 'bold',
});`,
  },
  {
    codeId: 1,
    title: 'hover',
    codeDetail: `const ExplanationText = styled(Typography)({
    marginTop: '10px',
     fontSize: '15px',
     fontWeight: 'bold',
});`,
  },
];
