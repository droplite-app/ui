const UploadBox = () => {
  return (
    <div className="w-[360px] h-[360px] bg-blue-50 mx-auto gap-0 rounded-[20px] mt-[20px] flex justify-center items-center">
      <svg
        width="132"
        height="105"
        viewBox="0 0 132 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_65_179)">
          <path
            d="M63.3333 24V40C63.3341 40.6797 63.5943 41.3334 64.0609 41.8276C64.5275 42.3219 65.1652 42.6193 65.8437 42.6591C66.5222 42.6989 67.1903 42.4782 67.7116 42.042C68.2328 41.6057 68.5677 40.9869 68.648 40.312L68.6667 40V24H84.6667C86.0122 23.9996 87.3082 24.5077 88.2948 25.4226C89.2814 26.3376 89.8858 27.5916 89.9867 28.9333L90 29.3333V53.3333C90.0004 54.6789 89.4923 55.9748 88.5773 56.9615C87.6624 57.9481 86.4084 58.5524 85.0667 58.6533L84.6667 58.6667H47.3333C45.9878 58.6671 44.6918 58.1589 43.7052 57.244C42.7186 56.3291 42.1142 55.0751 42.0133 53.7333L42 53.3333V29.3333C41.9996 27.9878 42.5078 26.6918 43.4227 25.7052C44.3376 24.7186 45.5916 24.1142 46.9333 24.0133L47.3333 24H63.3333ZM68.3573 6.58399L77.3147 15.5387C77.815 16.039 78.0962 16.7177 78.0962 17.4253C78.0962 18.133 77.815 18.8116 77.3147 19.312C76.8143 19.8124 76.1356 20.0935 75.428 20.0935C74.7204 20.0935 74.0417 19.8124 73.5413 19.312L68.6667 14.4347V24H63.3333V14.4347L58.4587 19.312C58.2109 19.5598 57.9168 19.7563 57.5931 19.8904C57.2693 20.0245 56.9224 20.0935 56.572 20.0935C56.2216 20.0935 55.8747 20.0245 55.5509 19.8904C55.2272 19.7563 54.9331 19.5598 54.6853 19.312C54.4376 19.0642 54.241 18.7701 54.107 18.4464C53.9729 18.1227 53.9039 17.7757 53.9039 17.4253C53.9039 17.0749 53.9729 16.728 54.107 16.4043C54.241 16.0806 54.4376 15.7864 54.6853 15.5387L63.6453 6.58399C64.2704 5.9595 65.1178 5.6087 66.0013 5.6087C66.8849 5.6087 67.7323 5.9595 68.3573 6.58399Z"
            fill="#0C4A6E"
          />
        </g>
        <path
          d="M13.6992 78.0938H16.3242V91.5605C16.3242 93.0553 15.9915 94.2995 15.3262 95.293C14.6608 96.2865 13.7767 97.0339 12.6738 97.5352C11.5801 98.0273 10.3906 98.2734 9.10547 98.2734C7.75651 98.2734 6.53516 98.0273 5.44141 97.5352C4.35677 97.0339 3.49544 96.2865 2.85742 95.293C2.22852 94.2995 1.91406 93.0553 1.91406 91.5605V78.0938H4.52539V91.5605C4.52539 92.5996 4.7168 93.4564 5.09961 94.1309C5.48242 94.8053 6.01562 95.3066 6.69922 95.6348C7.39193 95.9629 8.19401 96.127 9.10547 96.127C10.026 96.127 10.8281 95.9629 11.5117 95.6348C12.2044 95.3066 12.7422 94.8053 13.125 94.1309C13.5078 93.4564 13.6992 92.5996 13.6992 91.5605V78.0938ZM22.6133 86.0508V103.688H20.0703V83.207H22.3945L22.6133 86.0508ZM32.5801 90.4805V90.7676C32.5801 91.8431 32.4525 92.8411 32.1973 93.7617C31.9421 94.6732 31.5684 95.4661 31.0762 96.1406C30.5931 96.8151 29.9961 97.3392 29.2852 97.7129C28.5742 98.0866 27.7585 98.2734 26.8379 98.2734C25.8991 98.2734 25.0697 98.1185 24.3496 97.8086C23.6296 97.4987 23.0189 97.0475 22.5176 96.4551C22.0163 95.8626 21.6152 95.1517 21.3145 94.3223C21.0228 93.4928 20.8223 92.5586 20.7129 91.5195V89.9883C20.8223 88.8945 21.0273 87.9147 21.3281 87.0488C21.6289 86.1829 22.0254 85.4447 22.5176 84.834C23.0189 84.2142 23.625 83.7448 24.3359 83.4258C25.0469 83.0977 25.8672 82.9336 26.7969 82.9336C27.7266 82.9336 28.5514 83.1159 29.2715 83.4805C29.9915 83.8359 30.5977 84.3464 31.0898 85.0117C31.582 85.6771 31.9512 86.4746 32.1973 87.4043C32.4525 88.3249 32.5801 89.3503 32.5801 90.4805ZM30.0371 90.7676V90.4805C30.0371 89.7422 29.9596 89.0495 29.8047 88.4023C29.6497 87.7461 29.4082 87.1719 29.0801 86.6797C28.7611 86.1784 28.3509 85.7865 27.8496 85.5039C27.3483 85.2122 26.7513 85.0664 26.0586 85.0664C25.4206 85.0664 24.8646 85.1758 24.3906 85.3945C23.9258 85.6133 23.5293 85.9095 23.2012 86.2832C22.873 86.6478 22.6042 87.0671 22.3945 87.541C22.194 88.0059 22.0436 88.4889 21.9434 88.9902V92.5312C22.1257 93.1693 22.3809 93.7708 22.709 94.3359C23.0371 94.8919 23.4746 95.3431 24.0215 95.6895C24.5684 96.0267 25.2565 96.1953 26.0859 96.1953C26.7695 96.1953 27.3574 96.054 27.8496 95.7715C28.3509 95.4798 28.7611 95.0833 29.0801 94.582C29.4082 94.0807 29.6497 93.5065 29.8047 92.8594C29.9596 92.2031 30.0371 91.5059 30.0371 90.7676ZM38.5547 77V98H36.0117V77H38.5547ZM41.9453 90.7676V90.4531C41.9453 89.3867 42.1003 88.3978 42.4102 87.4863C42.7201 86.5658 43.1667 85.7682 43.75 85.0938C44.3333 84.4102 45.0397 83.8815 45.8691 83.5078C46.6986 83.125 47.6283 82.9336 48.6582 82.9336C49.6973 82.9336 50.6315 83.125 51.4609 83.5078C52.2995 83.8815 53.0104 84.4102 53.5938 85.0938C54.1862 85.7682 54.6374 86.5658 54.9473 87.4863C55.2572 88.3978 55.4121 89.3867 55.4121 90.4531V90.7676C55.4121 91.834 55.2572 92.8229 54.9473 93.7344C54.6374 94.6458 54.1862 95.4434 53.5938 96.127C53.0104 96.8014 52.304 97.3301 51.4746 97.7129C50.6543 98.0866 49.7246 98.2734 48.6855 98.2734C47.6465 98.2734 46.7122 98.0866 45.8828 97.7129C45.0534 97.3301 44.3424 96.8014 43.75 96.127C43.1667 95.4434 42.7201 94.6458 42.4102 93.7344C42.1003 92.8229 41.9453 91.834 41.9453 90.7676ZM44.4746 90.4531V90.7676C44.4746 91.5059 44.5612 92.2031 44.7344 92.8594C44.9076 93.5065 45.1673 94.0807 45.5137 94.582C45.8691 95.0833 46.3112 95.4798 46.8398 95.7715C47.3685 96.054 47.9837 96.1953 48.6855 96.1953C49.3783 96.1953 49.9844 96.054 50.5039 95.7715C51.0326 95.4798 51.4701 95.0833 51.8164 94.582C52.1628 94.0807 52.4225 93.5065 52.5957 92.8594C52.778 92.2031 52.8691 91.5059 52.8691 90.7676V90.4531C52.8691 89.724 52.778 89.0358 52.5957 88.3887C52.4225 87.7324 52.1582 87.1536 51.8027 86.6523C51.4564 86.1419 51.0189 85.7409 50.4902 85.4492C49.9707 85.1576 49.36 85.0117 48.6582 85.0117C47.9655 85.0117 47.3548 85.1576 46.8262 85.4492C46.3066 85.7409 45.8691 86.1419 45.5137 86.6523C45.1673 87.1536 44.9076 87.7324 44.7344 88.3887C44.5612 89.0358 44.4746 89.724 44.4746 90.4531ZM67.3066 95.4707V87.8555C67.3066 87.2721 67.1882 86.7663 66.9512 86.3379C66.7233 85.9004 66.377 85.5632 65.9121 85.3262C65.4473 85.0892 64.873 84.9707 64.1895 84.9707C63.5514 84.9707 62.9909 85.0801 62.5078 85.2988C62.0339 85.5176 61.6602 85.8047 61.3867 86.1602C61.1224 86.5156 60.9902 86.8984 60.9902 87.3086H58.4609C58.4609 86.7799 58.5977 86.2559 58.8711 85.7363C59.1445 85.2168 59.5365 84.7474 60.0469 84.3281C60.5664 83.8997 61.1862 83.5625 61.9062 83.3164C62.6354 83.0612 63.4466 82.9336 64.3398 82.9336C65.4154 82.9336 66.3633 83.1159 67.1836 83.4805C68.013 83.8451 68.6602 84.3965 69.125 85.1348C69.599 85.8639 69.8359 86.7799 69.8359 87.8828V94.7734C69.8359 95.2656 69.877 95.7897 69.959 96.3457C70.0501 96.9017 70.1823 97.3802 70.3555 97.7812V98H67.7168C67.5892 97.7083 67.4889 97.321 67.416 96.8379C67.3431 96.3457 67.3066 95.89 67.3066 95.4707ZM67.7441 89.0312L67.7715 90.8086H65.2148C64.4948 90.8086 63.8522 90.8678 63.2871 90.9863C62.722 91.0957 62.248 91.2643 61.8652 91.4922C61.4824 91.7201 61.1908 92.0072 60.9902 92.3535C60.7897 92.6908 60.6895 93.0872 60.6895 93.543C60.6895 94.0078 60.7943 94.4316 61.0039 94.8145C61.2135 95.1973 61.528 95.5026 61.9473 95.7305C62.3757 95.9492 62.8997 96.0586 63.5195 96.0586C64.2943 96.0586 64.9779 95.8945 65.5703 95.5664C66.1628 95.2383 66.6322 94.8372 66.9785 94.3633C67.334 93.8893 67.5254 93.429 67.5527 92.9824L68.6328 94.1992C68.569 94.582 68.3958 95.0059 68.1133 95.4707C67.8307 95.9355 67.4525 96.3822 66.9785 96.8105C66.5137 97.2298 65.9577 97.5807 65.3105 97.8633C64.6725 98.1367 63.9525 98.2734 63.1504 98.2734C62.1478 98.2734 61.2682 98.0775 60.5117 97.6855C59.7643 97.2936 59.181 96.7695 58.7617 96.1133C58.3516 95.4479 58.1465 94.7051 58.1465 93.8848C58.1465 93.0918 58.3014 92.3945 58.6113 91.793C58.9212 91.1823 59.3678 90.6764 59.9512 90.2754C60.5345 89.8652 61.2363 89.5553 62.0566 89.3457C62.877 89.1361 63.793 89.0312 64.8047 89.0312H67.7441ZM83.1387 95.1289V77H85.6816V98H83.3574L83.1387 95.1289ZM73.1855 90.7676V90.4805C73.1855 89.3503 73.3223 88.3249 73.5957 87.4043C73.8783 86.4746 74.2747 85.6771 74.7852 85.0117C75.3047 84.3464 75.9199 83.8359 76.6309 83.4805C77.3509 83.1159 78.153 82.9336 79.0371 82.9336C79.9668 82.9336 80.778 83.0977 81.4707 83.4258C82.1725 83.7448 82.765 84.2142 83.248 84.834C83.7402 85.4447 84.1276 86.1829 84.4102 87.0488C84.6927 87.9147 84.8887 88.8945 84.998 89.9883V91.2461C84.8978 92.3307 84.7018 93.306 84.4102 94.1719C84.1276 95.0378 83.7402 95.776 83.248 96.3867C82.765 96.9974 82.1725 97.4668 81.4707 97.7949C80.7689 98.1139 79.9486 98.2734 79.0098 98.2734C78.1439 98.2734 77.3509 98.0866 76.6309 97.7129C75.9199 97.3392 75.3047 96.8151 74.7852 96.1406C74.2747 95.4661 73.8783 94.6732 73.5957 93.7617C73.3223 92.8411 73.1855 91.8431 73.1855 90.7676ZM75.7285 90.4805V90.7676C75.7285 91.5059 75.8014 92.1986 75.9473 92.8457C76.1022 93.4928 76.3392 94.0625 76.6582 94.5547C76.9772 95.0469 77.3828 95.4342 77.875 95.7168C78.3672 95.9902 78.9551 96.127 79.6387 96.127C80.4772 96.127 81.1654 95.9492 81.7031 95.5938C82.25 95.2383 82.6875 94.7689 83.0156 94.1855C83.3438 93.6022 83.599 92.9688 83.7812 92.2852V88.9902C83.6719 88.4889 83.5124 88.0059 83.3027 87.541C83.1022 87.0671 82.8379 86.6478 82.5098 86.2832C82.1908 85.9095 81.7943 85.6133 81.3203 85.3945C80.8555 85.1758 80.304 85.0664 79.666 85.0664C78.9733 85.0664 78.3763 85.2122 77.875 85.5039C77.3828 85.7865 76.9772 86.1784 76.6582 86.6797C76.3392 87.1719 76.1022 87.7461 75.9473 88.4023C75.8014 89.0495 75.7285 89.7422 75.7285 90.4805ZM99.9414 98H97.4121V81.9219C97.4121 80.8008 97.6309 79.8529 98.0684 79.0781C98.5059 78.3034 99.1302 77.7155 99.9414 77.3145C100.753 76.9134 101.714 76.7129 102.826 76.7129C103.482 76.7129 104.125 76.7949 104.754 76.959C105.383 77.1139 106.03 77.3099 106.695 77.5469L106.271 79.6797C105.852 79.5156 105.365 79.3607 104.809 79.2148C104.262 79.0599 103.66 78.9824 103.004 78.9824C101.919 78.9824 101.135 79.2285 100.652 79.7207C100.178 80.2038 99.9414 80.9375 99.9414 81.9219V98ZM102.963 83.207V85.1484H95.0742V83.207H102.963ZM107.939 83.207V98H105.41V83.207H107.939ZM114.844 77V98H112.301V77H114.844ZM125.043 98.2734C124.013 98.2734 123.079 98.1003 122.24 97.7539C121.411 97.3984 120.695 96.9017 120.094 96.2637C119.501 95.6257 119.046 94.8691 118.727 93.9941C118.408 93.1191 118.248 92.1621 118.248 91.123V90.5488C118.248 89.3457 118.426 88.2747 118.781 87.3359C119.137 86.388 119.62 85.5859 120.23 84.9297C120.841 84.2734 121.534 83.7767 122.309 83.4395C123.083 83.1022 123.885 82.9336 124.715 82.9336C125.772 82.9336 126.684 83.1159 127.449 83.4805C128.224 83.8451 128.857 84.3555 129.35 85.0117C129.842 85.6589 130.206 86.4245 130.443 87.3086C130.68 88.1836 130.799 89.1406 130.799 90.1797V91.3145H119.752V89.25H128.27V89.0586C128.233 88.4023 128.096 87.7643 127.859 87.1445C127.632 86.5247 127.267 86.0143 126.766 85.6133C126.264 85.2122 125.581 85.0117 124.715 85.0117C124.141 85.0117 123.612 85.1348 123.129 85.3809C122.646 85.6178 122.231 85.9733 121.885 86.4473C121.538 86.9212 121.27 87.5 121.078 88.1836C120.887 88.8672 120.791 89.6556 120.791 90.5488V91.123C120.791 91.8249 120.887 92.4857 121.078 93.1055C121.279 93.7161 121.566 94.2539 121.939 94.7188C122.322 95.1836 122.783 95.5482 123.32 95.8125C123.867 96.0768 124.487 96.209 125.18 96.209C126.073 96.209 126.829 96.0267 127.449 95.6621C128.069 95.2975 128.611 94.8099 129.076 94.1992L130.607 95.416C130.288 95.8991 129.883 96.3594 129.391 96.7969C128.898 97.2344 128.292 97.5898 127.572 97.8633C126.861 98.1367 126.018 98.2734 125.043 98.2734Z"
          fill="#0C4A6E"
        />
        <defs>
          <clipPath id="clip0_65_179">
            <rect
              width="64"
              height="64"
              fill="white"
              transform="translate(34)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default UploadBox;
