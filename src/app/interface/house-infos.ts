export interface HouseInfos {
  slug: string;
  name: string;
  members: [
    {
      name: string;
      slug: string;
    }
  ];
}
