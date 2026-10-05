// Verified freelance marketplace profiles.
// Only platforms with an active, reviewed profile are listed here.
export interface Marketplace {
  name: string;
  url: string;
  /** Short label shown under the name on badges */
  label: string;
}

export const marketplaces: Marketplace[] = [
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~011a46eec04e001f37",
    label: "Verified Freelancer",
  },
  {
    name: "SEOClerk",
    url: "https://www.seoclerk.com/user/aarifnsu",
    label: "Verified Seller",
  },
];
