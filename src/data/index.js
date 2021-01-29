// NOTE: To mimix API call
export function getTransactionData() {
  return new Promise(function (resolve, reject) {
    const jsonArr = [
      {
        "id": 24954,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "11/25/2020",
        "amount": 609
      },
      {
        "id": 65629,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "12/02/2020",
        "amount": 788
      },
      {
        "id": 77426,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "01/23/2021",
        "amount": 947
      },
      {
        "id": 39178,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "01/15/2021",
        "amount": 929
      },
      {
        "id": 79048,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "11/09/2020",
        "amount": 684
      },
      {
        "id": 65699,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "11/19/2020",
        "amount": 571
      },
      {
        "id": 19621,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "12/25/2020",
        "amount": 46
      },
      {
        "id": 91663,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "11/11/2020",
        "amount": 970
      },
      {
        "id": 28852,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "01/07/2021",
        "amount": 941
      },
      {
        "id": 34403,
        "custId": 39503,
        "name": "Jaclyn Schowalter",
        "date": "01/25/2021",
        "amount": 735
      },
      {
        "id": 34876,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "01/27/2021",
        "amount": 338
      },
      {
        "id": 45730,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "12/12/2020",
        "amount": 625
      },
      {
        "id": 30770,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "01/20/2021",
        "amount": 411
      },
      {
        "id": 10479,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "01/03/2021",
        "amount": 696
      },
      {
        "id": 45618,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "12/18/2020",
        "amount": 887
      },
      {
        "id": 17525,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "01/26/2021",
        "amount": 717
      },
      {
        "id": 89000,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "12/30/2020",
        "amount": 656
      },
      {
        "id": 46054,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "11/10/2020",
        "amount": 41
      },
      {
        "id": 36872,
        "custId": 29100,
        "name": "Megane Mante",
        "date": "12/25/2020",
        "amount": 748
      },
      {
        "id": 49044,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "01/17/2021",
        "amount": 650
      },
      {
        "id": 75079,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "11/14/2020",
        "amount": 352
      },
      {
        "id": 85042,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "12/17/2020",
        "amount": 899
      },
      {
        "id": 94797,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "11/09/2020",
        "amount": 74
      },
      {
        "id": 2103,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "11/16/2020",
        "amount": 469
      },
      {
        "id": 49902,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "12/09/2020",
        "amount": 503
      },
      {
        "id": 47862,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "01/22/2021",
        "amount": 409
      },
      {
        "id": 86435,
        "custId": 4520,
        "name": "Josephine Langworth",
        "date": "01/07/2021",
        "amount": 973
      },
      {
        "id": 39035,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/22/2020",
        "amount": 467
      },
      {
        "id": 76088,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/23/2020",
        "amount": 968
      },
      {
        "id": 79117,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "01/02/2021",
        "amount": 101
      },
      {
        "id": 38959,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/27/2020",
        "amount": 971
      },
      {
        "id": 61813,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "11/10/2020",
        "amount": 964
      },
      {
        "id": 56459,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/23/2020",
        "amount": 296
      },
      {
        "id": 73091,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/19/2020",
        "amount": 476
      },
      {
        "id": 34734,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "11/27/2020",
        "amount": 769
      },
      {
        "id": 38696,
        "custId": 29967,
        "name": "Berta Witting",
        "date": "12/18/2020",
        "amount": 889
      },
      {
        "id": 26947,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "01/10/2021",
        "amount": 284
      },
      {
        "id": 16660,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "01/12/2021",
        "amount": 504
      },
      {
        "id": 79678,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "01/04/2021",
        "amount": 970
      },
      {
        "id": 49386,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "11/04/2020",
        "amount": 933
      },
      {
        "id": 25572,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "11/29/2020",
        "amount": 623
      },
      {
        "id": 11402,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "01/11/2021",
        "amount": 362
      },
      {
        "id": 23417,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "11/24/2020",
        "amount": 997
      },
      {
        "id": 12934,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "01/02/2021",
        "amount": 486
      },
      {
        "id": 58519,
        "custId": 53311,
        "name": "Gunner Ernser",
        "date": "11/16/2020",
        "amount": 864
      },
      {
        "id": 18981,
        "custId": 5688,
        "name": "Jessy Carter",
        "date": "11/11/2020",
        "amount": 871
      },
      {
        "id": 26671,
        "custId": 5688,
        "name": "Jessy Carter",
        "date": "12/23/2020",
        "amount": 554
      },
      {
        "id": 56692,
        "custId": 5688,
        "name": "Jessy Carter",
        "date": "01/21/2021",
        "amount": 759
      },
      {
        "id": 38008,
        "custId": 5688,
        "name": "Jessy Carter",
        "date": "12/02/2020",
        "amount": 650
      },
      {
        "id": 88727,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "01/23/2021",
        "amount": 114
      },
      {
        "id": 19071,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "11/26/2020",
        "amount": 616
      },
      {
        "id": 34065,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "01/04/2021",
        "amount": 538
      },
      {
        "id": 86536,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "12/04/2020",
        "amount": 578
      },
      {
        "id": 62172,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "12/12/2020",
        "amount": 211
      },
      {
        "id": 10385,
        "custId": 23158,
        "name": "Madge Ledner",
        "date": "12/27/2020",
        "amount": 247
      },
      {
        "id": 6210,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "11/19/2020",
        "amount": 51
      },
      {
        "id": 99261,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "11/11/2020",
        "amount": 787
      },
      {
        "id": 63750,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "11/28/2020",
        "amount": 289
      },
      {
        "id": 95595,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "01/26/2021",
        "amount": 163
      },
      {
        "id": 8058,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "12/13/2020",
        "amount": 298
      },
      {
        "id": 3046,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "12/03/2020",
        "amount": 420
      },
      {
        "id": 74085,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "01/24/2021",
        "amount": 900
      },
      {
        "id": 76001,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "01/23/2021",
        "amount": 298
      },
      {
        "id": 75692,
        "custId": 19605,
        "name": "Wyman Wyman",
        "date": "12/14/2020",
        "amount": 764
      },
      {
        "id": 12481,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "01/06/2021",
        "amount": 358
      },
      {
        "id": 87777,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "12/12/2020",
        "amount": 89
      },
      {
        "id": 8726,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "01/28/2021",
        "amount": 869
      },
      {
        "id": 3542,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "12/24/2020",
        "amount": 810
      },
      {
        "id": 77100,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "11/23/2020",
        "amount": 738
      },
      {
        "id": 15406,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "12/26/2020",
        "amount": 850
      },
      {
        "id": 51281,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "12/10/2020",
        "amount": 407
      },
      {
        "id": 18353,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "01/21/2021",
        "amount": 522
      },
      {
        "id": 2163,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "01/10/2021",
        "amount": 849
      },
      {
        "id": 86539,
        "custId": 32989,
        "name": "Josue Hane",
        "date": "01/11/2021",
        "amount": 285
      }
    ];

    resolve(jsonArr);
  });
}