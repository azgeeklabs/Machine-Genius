"use client";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./selectSignature.module.css";

const page = () => {
  const options = ["Script", "Article"];

  return (
    <div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div
            className={`${styles.try} flex flex-col justify-center gap-8 items-center mx-auto h-[75vh] py-[1.5vw]`}
          >
            {/* writing type select */}
            <h2 className="text-[2.5rem] font-bold">Select Role</h2>
            <div className=" grid grid-cols-3 gap-[2vw] w-full">
              <div className={`${styles.card} rounded-xl col-span-1`}>
                <h3 className=" mb-[0.9vw] ">Sales Team Manager</h3>
                <h5 className=" mb-[0.7vw]">hello@investocrasy.com</h5>
                <h5 className=" mb-[0.7vw]">www.machinegenius.com</h5>
                <h5>+02 2154896521</h5>
              </div>
              <div className={`${styles.card} rounded-xl col-span-1`}>
                <div className=" flex gap-[2.5vw] items-center justify-center">
                  <svg
                    width="58"
                    height="75"
                    viewBox="0 0 58 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="58"
                      height="75"
                      fill="url(#pattern0_1322_8133)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_1322_8133"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_1322_8133"
                          transform="matrix(0.00469484 0 0 0.00363067 0 -0.00466354)"
                        />
                      </pattern>
                      <image
                        id="image0_1322_8133"
                        width="213"
                        height="278"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                  <div className={`${styles.boxWithBefore} relative`}>
                    <h3 className=" mb-[0.8vw] ">Sales Team Manager</h3>
                    <h5 className=" mb-[0.7vw]">hello@investocrasy.com</h5>
                    <h5 className=" mb-[0.7vw]">www.machinegenius.com</h5>
                    <h5>+02 2154896521</h5>
                  </div>
                </div>
              </div>
              <div className={`${styles.card} rounded-xl col-span-1`}>
                <div className=" flex gap-[4vw] items-center pb-[2vw] border-b-[1px] border-b-[var(--dark)] mb-[1vw] mx-[3vw] pt-[0.2vw] relative">
                  <svg
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                    width="25"
                    height="31"
                    viewBox="0 0 25 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="25"
                      height="31"
                      fill="url(#pattern0_1322_8374)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_1322_8374"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_1322_8374"
                          transform="matrix(0.00469484 0 0 0.00378616 0 -0.0262759)"
                        />
                      </pattern>
                      <image
                        id="image0_1322_8374"
                        width="213"
                        height="278"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAEWCAYAAADxS9ItAAAACXBIWXMAACE3AAAhNwEzWJ96AAAT9UlEQVR4nO2d620byRKF24v9L98IpP09BCxHYDoC6UZgKoKlI7AcwdIRmIrgShEsGcFKAOe3xQjWjEAXLZ+RRhQfQ7JPP88HEBYWCz6GPFPVp6uq3zw8PBgRF1Wv6u/whn7Ws/pWX2E8SFQeqHrViTGm/XhrjDnFK9u/3zl+F9PW3xP8a4X30/5bz+qfUVyYTJGoHNISTx+isYL5EOnbtcK7x8MK776e1fcRvK/kkagOAGlavyWio2Q/zC8WiGgTPBTV9kCi2oElEcUagVxzB4Fd17N64vel00Si2kDVq2z6do5HP4NI5IIbKzArNKWLq5GollgS0llUby4+bBQbI4pJYECiAlWvsiIaSEh700Sw69LXYUWLCm7dAI/jCN5SDiwgrlGp+2dFigqGw1BRiY617cf1rB5n/jlfUJSoql7VRKVSnLtYmBtjLktJDYsQFcR0qRQvODY1HCE1zFZcWYtKYoqWrMWVpaiwZhoRauqEW6y4hrmtubISFdy8sdZMyWHXXINcKjayEBU2bG2a92cEb0fszxTiSnoj+bcI3sNBYNP2XoLKApth/Kh61WXKHybZSKVUL3uSTQmTFFXVq4ZI91Tgmj/f7HedkkuYlKiwdhqrEqI4bNQ6T6XsKRlRwSa/ziw6NU2BptX2bloduV1oOozNUpt+jmnx13pWR7/eSkJUVa8aJW5E3EEkt3jc+7rr4mbUiK15pLwZPkXUijYdjFpUSPeuE7zrTmNuScd1PU24i9lG+H6s6WC0oqp61Sl+lCmke3etbtgkNzBbowLOE6pEuYixGiNKUaFmbxS5oLLtesV2RdO0GbvArupZPYjgfTwRnaiw8fclgreyijnEXkz7eEtgw4jXYjfY04oizY5KVFWvsnf+TxG8lWWu0GxX9DQhpIiDSL+jO6yzggsrClFh4TyK7Mtq2hPGGmryEnxfQzxiStHvELGCGhjBRYUvaBJR7j5viUmDJDfQmjwVU89acGcwqKgiE1SWvT2+iKwhNKiwgokqIkEV0eLtg8jSwmDCCiKqiAR1hegkMTkkojVyEGGFEtUk8C5+FAva3IlkrIEV1qlPs8m7qALb5gu0EYwCvX6RYO8xZEro1W73KqrAgsqiVTtVsIl8HTBqeROWN1GhsfAvLy/2ms+KTnEQuGLmpp7V5+wX8SIq2K3f6S/0mqSa20ohcG/ct3pWD5kvQBdVwGrzqOrBxEsCt/VQq9uposKFuw2wIah0LxECNqC+Z2Uw7BFl154FZd29/0pQ6YBU7CLAG57gpu8cmqiwIPUZ2puNvmuPrykcgFTsI75DXxzhpu8ciqiwEPXp8Nxhg0+GRKKgrabvWVgfGIM7na+pEFLvPRoT0fTRiMMJZGx9dNkrx4hUPq1SCSozkG2c4Lv1xdjl+sqpqLDB62sdJUFlCr7TPvYZfXCMthUnOEv/UIZy6ylKSVAFECAVdJIGuoxUYwlKuASpoE/zwkka6ERUHtO+RezTSYVbPAvLSRp4cPrn0e2Leiqp4OK5fvSgagsXkcrX0Es1FRYMNoi/eroCB1XkHCQqbPL66I/6rEoJgRM/rjxciA+IjHtxaKTyUWN3o1o+0WLoaQ9rtK9psbeooGR2F+cdJqIK8QhMqoEH4+IIAt6ZvYwKjy0dtPJ8kTaejIu9hsbsG6l8DKv/LEGJdcC4uCFfoKN9LPadI5UnC31az+o+8flFBnjMmP7YJVrtE6nYo6YWWkeJLrTWV2x2ilY7RSpPUUqt8GInPI2+6xytdo1U7Cg1laDEHgw9uIGdo1VnUbWGzzNhP7/IEKSB7N/Oedd9q10i1YAcpb7J7RP7AjdwSryAnfetdhEV806wcNkkJoqF/RvqZIp0ElXVq87JtuWl2jnEoaDBkFkbeNylJrBrpGJGqbnMCeGQ4NFqq6jQJs9sQFTaJ5wB25sZrT5AE2vpEqnYUUpn7ArXsG/UGzXRRVTMHWtFKeEcD9Fq43E8G0UFg4JloytKCSbMG/YxtLGSbZFKUUokSchotVZU2D0+I72hBWs4vBAtmK7yXpGKeYzjWPtSgg0qdFhVFkfrUsBQotK+lPAFc92+UiMrWz+Q+v1LeiNeDjMWoqHqVT9JhtuintWvimzXRSpq6kd8biF8/uaOMKbvBetExWplX2h+nwiAV8PCd6RSlBLegb3OmhW4PVIhnLE2fCUqEQrWb+/dcvPiqkjFSv3makIUAWEuO15oxqeotJYSwfCZAq4SFavNQ6ISoWH9BteLapU96IiFy9O/hdgTlqherKuWIxVLVBKUCA7W9KxRZqfNH8uiOn39/zpBohKxwPotPgUkX5FK6ykRCyxRvY5U6Ltn7E/Ndz2KRAgi/kRljNk4zOIAtDclooG4rnoa4dcWlUwKUQqUG33jnrdFxTIpFKlEbLBu9I/ZXltUex0avA3tT4kIYd3oX4mKUUkxJzynEIfCMs4es71HUe17tH0HlPqJ6CAWdj/qqIlUWk+J0mAU1z5me42oWHa69qdErNCmeUlUolQoBlrVq04bUWlNJYQb3lLXVBqYKSKGttWz6+n0uyA7XZRIn5n+aT0lYob2+2xE9U5fvygJZucEM/2TSSGKhCkqmRSiRPpMUQkROxQz7TfiBCUhYoeyrlL6J4RjZFQI4RitqYRwjEQlhGMkKiEcI1EJ4RiJSgjHMEXFatEXImqYomI1PgoRNb9pP0kIt/ym7lwh3CKjQgjHMEWlQl1RJI2oWEc2ClEcjagYZoXcP1EkzPRPcy9EkTSiojiAxIMPhIgWZvpnVFUhSoRtqStSieJoREU/sVuIUmBHKolKFMejqIjn8rKO6BFib6yBVvWqEelIXvM7+auRrS6iAW70EI8j1vtqp39TxgtorqCIgapXDTDn7wtTUGYpUt2TwuEp8ywgITaBm/rYGHPs60Iti4qB/VAjffPCJ1WvOoGYKOumTbTTP9nqInlaJsSPEIIyS6JiVVUc464hBJXWuunPkFf6SVToAGYdKSqzQtCwJ8JXvcpmWt/ZJkQXli31W9KCrlksCuGMlkX+JaarulxRwUoBz0nPKwoFrt5tbIIyK0TFMiuObIgmPbcoiJYR8bdPm3wXXoiKWK5kGRCfWxRAKzoFNSK2saqgllJZoRRQ7EsK0anNKlGxotWxUkCxK/jNRB+d2qwS1TXx9ZQCis5UverSGPNPCtGpzZuHh4dX/7HqVT9Jfv+8ntXaCBYbgVV+Haoi4kCm65oUWdHKpoBaW4m1wIxgFXd7YZ2o5AIK7yDd+zuGqohDWJf+2fD7L/F1/6hnNasqXiQGfm+24uYsg+9udfqHOsAb4gsrWolH4O5NMhHUI5sGvzBdwCHxuUUiYP00yW3sQihRHaFMXxQKvv/k10+rWCsqpIBXxNe+JD63iJiqV43RppEl2+b+MaPVsaJVeUBQnwJ/cNs3eMEqydsoqnpWXxMbF40Mi3JA/d5tYEHZc9i+2hEP9aym9fd1mVDLbC78oM3g/IFlHtqQuIGYLtnnXIcWldGkpbyJQFA20/pYz+pzX3ujW0WFN8I0LLS2yhQM/AkpqCbV8zp3susBBexodakD4vKi1bIRQlB3xpj3PlK9VXQSFZTOal40KO3XhnAmtFK+EHtQX+tZbaMTa97KVnY5Soe9r/RF8wHTJ6CgnqJT6IvYWVSIVnfct6MxZikT0JQIHp3a7HroG9upk8WeKIEEtYCzF1V1zk6iwoYZPVrJtEgS34Ky+04nvp29LuxzPCnbUDhSGpgWKD3yKajP2Hfy7ux1YWdReXACLWfau0oDjA7zVXq0gBkRdcHAvgdp+8hhRxppFje48fkaHXaHdC8KM2ITe4kK0YpZZWGaNFDrqzjBDc9X+8YV3L0o071l9o1UBtFqwXlbT7xTbWB8tJw+H9j1U1JLgb1FhZpAHz/4T1pfRYevzd2L2NdPqzgkUhnsDzD7rRq+a30VBzAm2E5fY0gk6QIfJCrgK4pMJKywYGOebUxYQfVTMCTWcbCoPJkWRsZFWFqz+ZgkLyjjKFIZbAizTQuDtGMiYQXhmryOykJQxpWoYHX6SgMlLM9UvWpInm2ejaCMw0jVDInxkQYaCcsfaMdhbvZnJSjjUlRg6MkNNBKWN8bEtC87QRnXokIa6LN1Q8IiArePlfZlKShDiFQGF+mz6+fdgIRFwIPbd56joAxDVOaXsEYe11emJSztY7njkpj2XcTYB+UKiqjA0ENDYxsJyxE4jYO1yfst1UqJrtBE1bLZfexfNdg76z+qFTwYltt3U8/q7KdmMSNVs74KMXPiO7pRxY7ghsQwJ+5KmZ1PFZV5LmO6YL/OCmx1+63GnnUH5gQjStlsZZBKP9Sh0EVlngfGfPXxWkvYddat0sHODDHY1Pnz5ur0rcKLqMxzm4hPR7DhCOngtWz39eDaMNY7N7kbE8t4E5X5JaxBIGEZHNR8r7mCaxkSLPR5iWeQeRWVCS8s+6P5X9WrJlprPYNr8YXw1MWso9p4F5UJLywDd+tH1at02sgvGObEVc4bvJsIIioTh7AM7s73JRsZiFKu5/YtSj7FJZioTDzCaoyMUsXF+MzDEtO+hqCiMvEIy8BKLkpcJMdvWprbt0xwUZlnYX2L4K2YJXENM19zDQiOX1QncIQgClGZX8IaBqq8WIcV119Yc40zdQtdRym7J1WkOdEmGlGZ58qLj56LcLdxhIX8D5Q9DXKIXtivc109UfwRsyY2UZnnWsG+57aRrrzD/PB/UaGRssBcC+AKU4uL583Dw0OU16DVeXoWwdvZxg1GIU9SqHFDKvvD8dP+kZqobBEAoSJ/+rvjJ3RGM+/CbtCSdvtdctaIv+pVcwjsNmKRuXY3FaVaRBup2qATlT3MkckUIrvHv7e+9nHQCf0WKfUJHq7vzh9TNChYkSoJUZn00sGuNCdSWqH9XPF3V+y1acYInLQejDaOZey+VN/D6zinuPRvmVY6OMARPqlGrTbNF8qc/spG54ctEZ37tw3Y7qcezh0W25ljMrFokZyoDA6cQ8pxEdmeVmloDsgKkhRVA6LWSSS1gyUiUa0gaVEZrLVQO/hRKaFXprLRV5O8qBqspdtKCX0dklAyilJryEZUDTYlrGf1Cea5a73FQwbFGrITVQPmuZ9gNJrE5ZabkpsQt5GtqMzzeusS4lJa6I7i2zs2kbWoGiCuJi28iLQCPiWU+m2gCFG1gbhO4RbKit+duVy/zRQnqga4hdaK/w9MDUWvbihKbSGZ2j8WWHBbU2OEiu4BTirxUYyaIlpPbaHYSLUK2/tkZ2Vg7fUew2hkbrykmIMG9iWZ1o+QIIL1EcFSrig/lDluOFlQfOtHSNC9e9u0OWBoSh/V8iWJTFGqAxLVHqDd4WnBjs7kRmSnGa/HJKoOSFQOQCv5iwU8hNZ04fbRnfsu1c8IZFJ0QKIisW5mA8YCNK3vzfwIA+Etsy21vFvRet+0458TRKz9qQ5IVJ6Bhd8IjnbnR6R0ijZ9uyFLPV9cD/lUr1pHJKp8cZ36qSq9IxJVhpBGUcv564hElSenJX7oWJCoRFdkp3dEosoTnbwfEIkqTxiiklHREYlKdCKFI4JiQaISwjESVZ7kfPh39EhUeSJLPSASlRCOkaiEcIxEJYRjJCohHCNRiZKhuKQSlegEo+kxAhjjDX5KVHmi6odw3EpUecKo08tq76vqVbSiY4lKdCW3ynfW51H6lymKVNthiUrpX6Yw1lS5TeKl3SQkKtEZzJTPBcpnsfMeJaoMWTfI0wE52eqMyPt4trRElS+Mw8MHOVwt4p7bY9otUeULY131jmlFe+Sc9FISVeawNoBziFYSldgLiWoFOFuMddSRRJU5LLPiuOpVKQuL9d4XzXAciSpTcEIH67ziyxSvGtaDZ6Snf7qJSVR5o2j1khHxuSWqQmCOah6RDkKgABudFaVM+7haiSpvromf7sgYM07h6kH8zPc6bx+IJ1FlDE5tvCF+wrNE0sAR+XDzFzcviSp/mNHKIA2Mtiaw6lVDY8wn8su8WKu9eXh4IL+eCE3Vq34iXWNhS6L6sc1bRxT9Tn6Zu3pWv7ipKFKVAdP1MhDsJKaI5UlQZtW1lajKwIehEI2wql419iQou+H76tpKVAUAZ+rKwye1wvoH6xjv2M3dqldNPKyhGlZmABJVOfisgvjL/rh9VrRDyLceO5QX60Qlo6Igql5lfwR/ev7ENkJetvdxXIJN3RFpht8mvtazeuWNSqIqCGyC3pOdwHVYcY1ddCXjc5wj+jL3n9Zho9QJ9gFfIVEVhkdXbB1z7J1ZcU3W/TCXQUQ6RUs/s9yoCxerDIoGiapAsJiPZTrSHNHTLNUqnmLW+dsAqd0mpvWs3tiO/3vwtyhCMMCiPkQauMxxK4WLfQzaoks/lty/AoFpkMUQF890MlwkqkKpZ7Vd13wr/TrswE09qztVpkhUBVPParu3My39OnRgvktkl6iEtabvir8K67HrqPOuLqWR+yfM877PJDKXLRbe71p9r0glmmbGviLWKy72aWeRqMQjEtYrNm7wbkKiEk+0hMVswY+dBVK+vdtltKYSK6l6la2r+1LY1bFRenBoB7NEJdaCervrSCov2NxAUAefQilRiY20xnuFLmJlsUClhLORAxKV6ASi1jhQqwWLKaKT014viUrsBFpHQvUxucJWSAxRquUciUrsTARNgvsyR6pHHYQjUYmDQOQaRN62YV29EVtMDRKVcAKGvDQCiyF6LeBcjnwP+ZSohHMgsHM8fEawp1Z91nqpCxKVoNOaL2EfJ/j30L2vpg1/gi7mzvMu2EhUIhgQW8OmuQ9WLE0Kd88ad+YEY8z/ASShwTmwdBq8AAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                  <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Sales Team Manager</h3>
                </div>

                <div className=" text-center">
                  <h5 className="mb-[0.4vw]">+02 2154896521</h5>
                  <hr className=" w-[30%] bg-[#ACACAC] mx-auto h-[2px] mb-[0.4vw]"/>
                  <h5 className="mb-[0.4vw]">hello@investocrasy.com</h5>
                  <hr  className=" w-[30%] bg-[#ACACAC] mx-auto h-[2px] mb-[0.4vw]"/>
                  <h5>www.machinegenius.com</h5>
                </div>
              </div>
            </div>
          </div>

          {/* buttons to move to last or next page */}
          <div className="flex justify-end items-center w-full">
            <CustomBtn
              word="Next"
              btnColor="black"
              href="/op/email-creation/selectSignature"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
