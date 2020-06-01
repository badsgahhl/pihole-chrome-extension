/**
 * 0: unset
 * -1: DEV
 * > 0: actual Version
 */
export interface PiHoleVersions
{
	FTL_current: number;
	FTL_latest: number;
	web_current: number;
	web_latest: number;
	core_current: number;
	core_latest: number;
}
