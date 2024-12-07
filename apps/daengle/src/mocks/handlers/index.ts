import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://api.daengle.com/api/user/estimate/list', () => {
    return HttpResponse.json({
      success: true,
      response: {
        petInfos: [
          {
            petId: 1,
            name: '강아지A',
            image: null,
            groomingEstimates: [
              {
                groomingEstimateId: 1,
                name: '유레카미용사',
                daengleMeter: 0,
                proposal: 'GENERAL',
                image: null,
                shopName: '유레카 헤어샵',
                reservedDate: '2024-11-25 11:23:44',
              },
            ],
            careEstimates: [
              {
                careEstimateId: 3,
                name: '다고쳐 댕댕병원',
                daengleMeter: 0,
                proposal: 'GENERAL',
                image: null,
                reservedDate: '2024-10-25 11:33:22',
              },
            ],
          },
          {
            petId: 2,
            name: '강아지D',
            image: '반려견 이미지',
            groomingEstimates: [],
            careEstimates: [
              {
                careEstimateId: 5,
                name: '다고쳐 댕댕병원',
                daengleMeter: 0,
                proposal: 'GENERAL',
                image: null,
                reservedDate: '2024-12-25 11:33:22',
              },
            ],
          },
        ],
      },
      error: null,
    });
  }),
];
