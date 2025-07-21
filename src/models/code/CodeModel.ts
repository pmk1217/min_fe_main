export interface StereotypingCode {
  codeId: number;
  title: string;
  codeDetail: string;
}

export const CodeMock: StereotypingCode[] = [
  {
    codeId: 0,
    title: 'Mui Styled',
    codeDetail: `const Test = styled(Box)({
    marginTop: '10px',
     fontSize: '15px',
     fontWeight: 'bold',
});`,
  },
  {
    codeId: 1,
    title: 'hover',
    codeDetail: `'&:hover': {
    backgroundColor: '#F6F6F6',
    cursor: 'pointer',
},`,
  },
  {
    codeId: 2,
    title: 'getApi (List)',
    codeDetail: `export const getTestList = async (searchWord: string, pagination: MRT_PaginationState): Promise<TestListResponse> => {
  const TestParam = new URLSearchParams({
    searchWord: searchWord ?? '',
    pageIndex: pagination.pageIndex.toString(),
    pageSize: pagination.pageSize.toString(),
  });
  const request: CommonRequest = {
    url: '/api/test',
    params: TestParam,
  };
  const response: TestListResponse = await getRestApi(request);
  return response;
};`,
  },
  {
    codeId: 3,
    title: 'getApi (Detail)',
    codeDetail: `export const getTestDetail = async (testId:number): Promise<TestDetailInfo> => {
  const request: CommonRequest = {
    url: '/api/test/\${testId}',
  };
  const response: TestDetailInfo = await getRestApi(request);
  return response;
};`,
  },
  {
    codeId: 4,
    title: 'postApi (Create)',
    codeDetail: `export const postTestCreate = async (testRequestBody: TestCreateReuqestBody): Promise<TestCreateResponse> => {
  const formData = new FormData();
  formData.append('testDto', JSON.stringify(testRequestBody.testDto));

  if(testRequestBody.files?.length > 0 {
    testRequestBody.files.forEach((item) => {
      formData.append('files', item);
    });
  }
  const request: CommonRequest = {
    url: '/api/test/create',
    requestBody: formData,
  };
  const response: TestCreateResponse = await uploadRestApi(request);
  return response;
};`,
  },
  {
    codeId: 5,
    title: 'postApi (Update)',
    codeDetail: `export const postTestUpdate = async (testRequestBody: TestUpdateReuqestBody) => {
  const formData = new FormData();
  formData.append('testDto', JSON.stringify(testRequestBody.testDto));

  if(testRequestBody.files?.length > 0 {
    testRequestBody.files.forEach((item) => {
      formData.append('files', item);
    });
  }
  const request: CommonRequest = {
    url: '/api/test/\${testRequestBody.testDto.testId ?? ''}/update',
    requestBody: formData,
  };
  const response = await uploadRestApi(request);
  return response;
};`,
  },
  {
    codeId: 6,
    title: 'postApi (Delete)',
    codeDetail: `export const postTestDelete = async (testId: number) => {
  const request: CommonRequest = {
    url: '/api/test/\${testId}/delete',
  };
  const response = await postRestApi(request);
  return response;
};`,
  },
];
