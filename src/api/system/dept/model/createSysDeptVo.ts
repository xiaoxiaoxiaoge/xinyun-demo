export interface CreateSysDeptVo {
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
   * 父级ID
   */
  parentId: string;

  /**
   * 备注
   */
  description: string;
}
