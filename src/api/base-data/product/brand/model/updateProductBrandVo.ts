export interface UpdateProductBrandVo {
  /**
   * ID
   */
  id: string;

  /**
   * 编号
   */
  code: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 简称
   */
  shortName: string;

  /**
   * logo
   */
  logo: string;

  /**
   * 简介
   */
  introduction: string;

  /**
   * 状态
   */
  available: boolean;

  /**
   * 备注
   */
  description: string;
}
