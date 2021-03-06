import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  assignableWateringPeriod?: Maybe<Array<Maybe<WateringPeriod>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Garden type nodes. */
  Garden?: Maybe<Array<Maybe<Garden>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for WateringTask type nodes. */
  WateringTask?: Maybe<Array<Maybe<WateringTask>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for WateringPeriod type nodes. */
  WateringPeriod?: Maybe<Array<Maybe<WateringPeriod>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ChangeRequest type nodes. */
  ChangeRequest?: Maybe<Array<Maybe<ChangeRequest>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LogEvent type nodes. */
  LogEvent?: Maybe<Array<Maybe<LogEvent>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GeoShape type nodes. */
  GeoShape?: Maybe<Array<Maybe<GeoShape>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GardenLayer type nodes. */
  GardenLayer?: Maybe<Array<Maybe<GardenLayer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PolygonShape type nodes. */
  PolygonShape?: Maybe<Array<Maybe<PolygonShape>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for MarkerShape type nodes. */
  MarkerShape?: Maybe<Array<Maybe<MarkerShape>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GardenFeature type nodes. */
  GardenFeature?: Maybe<Array<Maybe<GardenFeature>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for UserSettings type nodes. */
  UserSettings?: Maybe<Array<Maybe<UserSettings>>>;
};


export type QueryAssignableWateringPeriodArgs = {
  gardenId: Scalars['ID'];
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringPeriodOrdering>>>;
};


export type QueryGardenArgs = {
  gardenId?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenOrdering>>>;
  filter?: Maybe<_GardenFilter>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type QueryWateringTaskArgs = {
  date?: Maybe<_Neo4jDateInput>;
  done?: Maybe<Scalars['Boolean']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};


export type QueryWateringPeriodArgs = {
  from?: Maybe<_Neo4jDateInput>;
  till?: Maybe<_Neo4jDateInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringPeriodOrdering>>>;
  filter?: Maybe<_WateringPeriodFilter>;
};


export type QueryChangeRequestArgs = {
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ChangeRequestOrdering>>>;
  filter?: Maybe<_ChangeRequestFilter>;
};


export type QueryLogEventArgs = {
  date?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LogEventOrdering>>>;
  filter?: Maybe<_LogEventFilter>;
};


export type QueryGeoShapeArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GeoShapeOrdering>>>;
  filter?: Maybe<_GeoShapeFilter>;
};


export type QueryGardenLayerArgs = {
  layerId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenLayerOrdering>>>;
  filter?: Maybe<_GardenLayerFilter>;
};


export type QueryPolygonShapeArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  startPoint?: Maybe<_Neo4jPointInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PolygonShapeOrdering>>>;
  filter?: Maybe<_PolygonShapeFilter>;
};


export type QueryMarkerShapeArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  icon?: Maybe<Scalars['String']>;
  point?: Maybe<_Neo4jPointInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MarkerShapeOrdering>>>;
  filter?: Maybe<_MarkerShapeFilter>;
};


export type QueryGardenFeatureArgs = {
  featureId?: Maybe<Scalars['ID']>;
  infoText?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['String']>;
  plants?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenFeatureOrdering>>>;
  filter?: Maybe<_GardenFeatureFilter>;
};


export type QueryUserSettingsArgs = {
  ui_locale?: Maybe<Scalars['String']>;
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserSettingsOrdering>>>;
  filter?: Maybe<_UserSettingsFilter>;
};

export enum _WateringPeriodOrdering {
  FromAsc = 'from_asc',
  FromDesc = 'from_desc',
  TillAsc = 'till_asc',
  TillDesc = 'till_desc',
  HasUsersAssignedAsc = 'hasUsersAssigned_asc',
  HasUsersAssignedDesc = 'hasUsersAssigned_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type WateringPeriod = {
  __typename?: 'WateringPeriod';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  from: _Neo4jDate;
  till: _Neo4jDate;
  at?: Maybe<Garden>;
  wateringtasks?: Maybe<Array<Maybe<WateringTask>>>;
  hasUsersAssigned?: Maybe<Scalars['Boolean']>;
};


export type WateringPeriodAtArgs = {
  filter?: Maybe<_GardenFilter>;
};


export type WateringPeriodWateringtasksArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

export type _GardenFilter = {
  AND?: Maybe<Array<_GardenFilter>>;
  OR?: Maybe<Array<_GardenFilter>>;
  gardenId?: Maybe<Scalars['ID']>;
  gardenId_not?: Maybe<Scalars['ID']>;
  gardenId_in?: Maybe<Array<Scalars['ID']>>;
  gardenId_not_in?: Maybe<Array<Scalars['ID']>>;
  gardenId_contains?: Maybe<Scalars['ID']>;
  gardenId_not_contains?: Maybe<Scalars['ID']>;
  gardenId_starts_with?: Maybe<Scalars['ID']>;
  gardenId_not_starts_with?: Maybe<Scalars['ID']>;
  gardenId_ends_with?: Maybe<Scalars['ID']>;
  gardenId_not_ends_with?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
};

export type Garden = {
  __typename?: 'Garden';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  gardenId: Scalars['ID'];
  label: Scalars['String'];
};

export enum _WateringTaskOrdering {
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  DoneAsc = 'done_asc',
  DoneDesc = 'done_desc',
  Neo4jImportIdAsc = 'neo4jImportId_asc',
  Neo4jImportIdDesc = 'neo4jImportId_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _WateringTaskFilter = {
  AND?: Maybe<Array<_WateringTaskFilter>>;
  OR?: Maybe<Array<_WateringTaskFilter>>;
  date?: Maybe<_Neo4jDateInput>;
  date_not?: Maybe<_Neo4jDateInput>;
  date_in?: Maybe<Array<_Neo4jDateInput>>;
  date_not_in?: Maybe<Array<_Neo4jDateInput>>;
  date_lt?: Maybe<_Neo4jDateInput>;
  date_lte?: Maybe<_Neo4jDateInput>;
  date_gt?: Maybe<_Neo4jDateInput>;
  date_gte?: Maybe<_Neo4jDateInput>;
  done?: Maybe<Scalars['Boolean']>;
  done_not?: Maybe<Scalars['Boolean']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  neo4jImportId_not?: Maybe<Scalars['String']>;
  neo4jImportId_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_not_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_contains?: Maybe<Scalars['String']>;
  neo4jImportId_not_contains?: Maybe<Scalars['String']>;
  neo4jImportId_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  users_assigned?: Maybe<_UserFilter>;
  users_assigned_not?: Maybe<_UserFilter>;
  users_assigned_in?: Maybe<Array<_UserFilter>>;
  users_assigned_not_in?: Maybe<Array<_UserFilter>>;
  users_assigned_some?: Maybe<_UserFilter>;
  users_assigned_none?: Maybe<_UserFilter>;
  users_assigned_single?: Maybe<_UserFilter>;
  users_assigned_every?: Maybe<_UserFilter>;
  changerequests_requested_for?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_for_not?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_for_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_for_not_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_for_some?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_for_none?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_for_single?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_for_every?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task_not?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_new_task_not_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_new_task_some?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task_none?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task_single?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_new_task_every?: Maybe<_ChangeRequestFilter>;
  logevents_refers_to?: Maybe<_LogEventFilter>;
  logevents_refers_to_not?: Maybe<_LogEventFilter>;
  logevents_refers_to_in?: Maybe<Array<_LogEventFilter>>;
  logevents_refers_to_not_in?: Maybe<Array<_LogEventFilter>>;
  logevents_refers_to_some?: Maybe<_LogEventFilter>;
  logevents_refers_to_none?: Maybe<_LogEventFilter>;
  logevents_refers_to_single?: Maybe<_LogEventFilter>;
  logevents_refers_to_every?: Maybe<_LogEventFilter>;
  users_available?: Maybe<_UserFilter>;
  users_available_not?: Maybe<_UserFilter>;
  users_available_in?: Maybe<Array<_UserFilter>>;
  users_available_not_in?: Maybe<Array<_UserFilter>>;
  users_available_some?: Maybe<_UserFilter>;
  users_available_none?: Maybe<_UserFilter>;
  users_available_single?: Maybe<_UserFilter>;
  users_available_every?: Maybe<_UserFilter>;
  wateringperiod?: Maybe<_WateringPeriodFilter>;
  wateringperiod_not?: Maybe<_WateringPeriodFilter>;
  wateringperiod_in?: Maybe<Array<_WateringPeriodFilter>>;
  wateringperiod_not_in?: Maybe<Array<_WateringPeriodFilter>>;
  wateringperiod_some?: Maybe<_WateringPeriodFilter>;
  wateringperiod_none?: Maybe<_WateringPeriodFilter>;
  wateringperiod_single?: Maybe<_WateringPeriodFilter>;
  wateringperiod_every?: Maybe<_WateringPeriodFilter>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  id_not_in?: Maybe<Array<Scalars['String']>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  id_starts_with?: Maybe<Scalars['String']>;
  id_not_starts_with?: Maybe<Scalars['String']>;
  id_ends_with?: Maybe<Scalars['String']>;
  id_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  neo4jImportId_not?: Maybe<Scalars['String']>;
  neo4jImportId_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_not_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_contains?: Maybe<Scalars['String']>;
  neo4jImportId_not_contains?: Maybe<Scalars['String']>;
  neo4jImportId_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  assigned?: Maybe<_WateringTaskFilter>;
  assigned_not?: Maybe<_WateringTaskFilter>;
  assigned_in?: Maybe<Array<_WateringTaskFilter>>;
  assigned_not_in?: Maybe<Array<_WateringTaskFilter>>;
  assigned_some?: Maybe<_WateringTaskFilter>;
  assigned_none?: Maybe<_WateringTaskFilter>;
  assigned_single?: Maybe<_WateringTaskFilter>;
  assigned_every?: Maybe<_WateringTaskFilter>;
  available?: Maybe<_WateringTaskFilter>;
  available_not?: Maybe<_WateringTaskFilter>;
  available_in?: Maybe<Array<_WateringTaskFilter>>;
  available_not_in?: Maybe<Array<_WateringTaskFilter>>;
  available_some?: Maybe<_WateringTaskFilter>;
  available_none?: Maybe<_WateringTaskFilter>;
  available_single?: Maybe<_WateringTaskFilter>;
  available_every?: Maybe<_WateringTaskFilter>;
  changerequests_requested_by?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_by_not?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_by_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_by_not_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_by_some?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_by_none?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_by_single?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_by_every?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to_not?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_to_not_in?: Maybe<Array<_ChangeRequestFilter>>;
  changerequests_requested_to_some?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to_none?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to_single?: Maybe<_ChangeRequestFilter>;
  changerequests_requested_to_every?: Maybe<_ChangeRequestFilter>;
  logevents_triggered_by?: Maybe<_LogEventFilter>;
  logevents_triggered_by_not?: Maybe<_LogEventFilter>;
  logevents_triggered_by_in?: Maybe<Array<_LogEventFilter>>;
  logevents_triggered_by_not_in?: Maybe<Array<_LogEventFilter>>;
  logevents_triggered_by_some?: Maybe<_LogEventFilter>;
  logevents_triggered_by_none?: Maybe<_LogEventFilter>;
  logevents_triggered_by_single?: Maybe<_LogEventFilter>;
  logevents_triggered_by_every?: Maybe<_LogEventFilter>;
};

export type _ChangeRequestFilter = {
  AND?: Maybe<Array<_ChangeRequestFilter>>;
  OR?: Maybe<Array<_ChangeRequestFilter>>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  neo4jImportId_not?: Maybe<Scalars['String']>;
  neo4jImportId_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_not_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_contains?: Maybe<Scalars['String']>;
  neo4jImportId_not_contains?: Maybe<Scalars['String']>;
  neo4jImportId_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  requested_by?: Maybe<_UserFilter>;
  requested_by_not?: Maybe<_UserFilter>;
  requested_by_in?: Maybe<Array<_UserFilter>>;
  requested_by_not_in?: Maybe<Array<_UserFilter>>;
  requested_by_some?: Maybe<_UserFilter>;
  requested_by_none?: Maybe<_UserFilter>;
  requested_by_single?: Maybe<_UserFilter>;
  requested_by_every?: Maybe<_UserFilter>;
  requested_for?: Maybe<_WateringTaskFilter>;
  requested_for_not?: Maybe<_WateringTaskFilter>;
  requested_for_in?: Maybe<Array<_WateringTaskFilter>>;
  requested_for_not_in?: Maybe<Array<_WateringTaskFilter>>;
  requested_for_some?: Maybe<_WateringTaskFilter>;
  requested_for_none?: Maybe<_WateringTaskFilter>;
  requested_for_single?: Maybe<_WateringTaskFilter>;
  requested_for_every?: Maybe<_WateringTaskFilter>;
  requested_to?: Maybe<_UserFilter>;
  requested_to_not?: Maybe<_UserFilter>;
  requested_to_in?: Maybe<Array<_UserFilter>>;
  requested_to_not_in?: Maybe<Array<_UserFilter>>;
  requested_to_some?: Maybe<_UserFilter>;
  requested_to_none?: Maybe<_UserFilter>;
  requested_to_single?: Maybe<_UserFilter>;
  requested_to_every?: Maybe<_UserFilter>;
  requested_new_task?: Maybe<_WateringTaskFilter>;
  requested_new_task_not?: Maybe<_WateringTaskFilter>;
  requested_new_task_in?: Maybe<Array<_WateringTaskFilter>>;
  requested_new_task_not_in?: Maybe<Array<_WateringTaskFilter>>;
  requested_new_task_some?: Maybe<_WateringTaskFilter>;
  requested_new_task_none?: Maybe<_WateringTaskFilter>;
  requested_new_task_single?: Maybe<_WateringTaskFilter>;
  requested_new_task_every?: Maybe<_WateringTaskFilter>;
};

export type _LogEventFilter = {
  AND?: Maybe<Array<_LogEventFilter>>;
  OR?: Maybe<Array<_LogEventFilter>>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Scalars['String']>>;
  date_not_in?: Maybe<Array<Scalars['String']>>;
  date_contains?: Maybe<Scalars['String']>;
  date_not_contains?: Maybe<Scalars['String']>;
  date_starts_with?: Maybe<Scalars['String']>;
  date_not_starts_with?: Maybe<Scalars['String']>;
  date_ends_with?: Maybe<Scalars['String']>;
  date_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  neo4jImportId_not?: Maybe<Scalars['String']>;
  neo4jImportId_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_not_in?: Maybe<Array<Scalars['String']>>;
  neo4jImportId_contains?: Maybe<Scalars['String']>;
  neo4jImportId_not_contains?: Maybe<Scalars['String']>;
  neo4jImportId_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_starts_with?: Maybe<Scalars['String']>;
  neo4jImportId_ends_with?: Maybe<Scalars['String']>;
  neo4jImportId_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  triggered_by?: Maybe<_UserFilter>;
  triggered_by_not?: Maybe<_UserFilter>;
  triggered_by_in?: Maybe<Array<_UserFilter>>;
  triggered_by_not_in?: Maybe<Array<_UserFilter>>;
  triggered_by_some?: Maybe<_UserFilter>;
  triggered_by_none?: Maybe<_UserFilter>;
  triggered_by_single?: Maybe<_UserFilter>;
  triggered_by_every?: Maybe<_UserFilter>;
  refers_to?: Maybe<_WateringTaskFilter>;
  refers_to_not?: Maybe<_WateringTaskFilter>;
  refers_to_in?: Maybe<Array<_WateringTaskFilter>>;
  refers_to_not_in?: Maybe<Array<_WateringTaskFilter>>;
  refers_to_some?: Maybe<_WateringTaskFilter>;
  refers_to_none?: Maybe<_WateringTaskFilter>;
  refers_to_single?: Maybe<_WateringTaskFilter>;
  refers_to_every?: Maybe<_WateringTaskFilter>;
};

export type _WateringPeriodFilter = {
  AND?: Maybe<Array<_WateringPeriodFilter>>;
  OR?: Maybe<Array<_WateringPeriodFilter>>;
  from?: Maybe<_Neo4jDateInput>;
  from_not?: Maybe<_Neo4jDateInput>;
  from_in?: Maybe<Array<_Neo4jDateInput>>;
  from_not_in?: Maybe<Array<_Neo4jDateInput>>;
  from_lt?: Maybe<_Neo4jDateInput>;
  from_lte?: Maybe<_Neo4jDateInput>;
  from_gt?: Maybe<_Neo4jDateInput>;
  from_gte?: Maybe<_Neo4jDateInput>;
  till?: Maybe<_Neo4jDateInput>;
  till_not?: Maybe<_Neo4jDateInput>;
  till_in?: Maybe<Array<_Neo4jDateInput>>;
  till_not_in?: Maybe<Array<_Neo4jDateInput>>;
  till_lt?: Maybe<_Neo4jDateInput>;
  till_lte?: Maybe<_Neo4jDateInput>;
  till_gt?: Maybe<_Neo4jDateInput>;
  till_gte?: Maybe<_Neo4jDateInput>;
  at?: Maybe<_GardenFilter>;
  at_not?: Maybe<_GardenFilter>;
  at_in?: Maybe<Array<_GardenFilter>>;
  at_not_in?: Maybe<Array<_GardenFilter>>;
  wateringtasks?: Maybe<_WateringTaskFilter>;
  wateringtasks_not?: Maybe<_WateringTaskFilter>;
  wateringtasks_in?: Maybe<Array<_WateringTaskFilter>>;
  wateringtasks_not_in?: Maybe<Array<_WateringTaskFilter>>;
  wateringtasks_some?: Maybe<_WateringTaskFilter>;
  wateringtasks_none?: Maybe<_WateringTaskFilter>;
  wateringtasks_single?: Maybe<_WateringTaskFilter>;
  wateringtasks_every?: Maybe<_WateringTaskFilter>;
};

export type WateringTask = {
  __typename?: 'WateringTask';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  date: _Neo4jDate;
  done?: Maybe<Scalars['Boolean']>;
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
  users_assigned?: Maybe<Array<Maybe<User>>>;
  changerequests_requested_for?: Maybe<Array<Maybe<ChangeRequest>>>;
  changerequests_requested_new_task?: Maybe<Array<Maybe<ChangeRequest>>>;
  logevents_refers_to?: Maybe<Array<Maybe<LogEvent>>>;
  users_available?: Maybe<Array<Maybe<User>>>;
  wateringperiod?: Maybe<Array<Maybe<WateringPeriod>>>;
};


export type WateringTaskUsers_AssignedArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type WateringTaskChangerequests_Requested_ForArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ChangeRequestOrdering>>>;
  filter?: Maybe<_ChangeRequestFilter>;
};


export type WateringTaskChangerequests_Requested_New_TaskArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ChangeRequestOrdering>>>;
  filter?: Maybe<_ChangeRequestFilter>;
};


export type WateringTaskLogevents_Refers_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LogEventOrdering>>>;
  filter?: Maybe<_LogEventFilter>;
};


export type WateringTaskUsers_AvailableArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type WateringTaskWateringperiodArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringPeriodOrdering>>>;
  filter?: Maybe<_WateringPeriodFilter>;
};

export enum _UserOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  Neo4jImportIdAsc = 'neo4jImportId_asc',
  Neo4jImportIdDesc = 'neo4jImportId_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  _IdAsc = '_id_asc',
  _IdDesc = '_id_desc'
}

export type User = {
  __typename?: 'User';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
  assigned?: Maybe<Array<Maybe<WateringTask>>>;
  available?: Maybe<Array<Maybe<WateringTask>>>;
  changerequests_requested_by?: Maybe<Array<Maybe<ChangeRequest>>>;
  changerequests_requested_to?: Maybe<Array<Maybe<ChangeRequest>>>;
  logevents_triggered_by?: Maybe<Array<Maybe<LogEvent>>>;
};


export type UserAssignedArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};


export type UserAvailableArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};


export type UserChangerequests_Requested_ByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ChangeRequestOrdering>>>;
  filter?: Maybe<_ChangeRequestFilter>;
};


export type UserChangerequests_Requested_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ChangeRequestOrdering>>>;
  filter?: Maybe<_ChangeRequestFilter>;
};


export type UserLogevents_Triggered_ByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LogEventOrdering>>>;
  filter?: Maybe<_LogEventFilter>;
};

export enum _ChangeRequestOrdering {
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  Neo4jImportIdAsc = 'neo4jImportId_asc',
  Neo4jImportIdDesc = 'neo4jImportId_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type ChangeRequest = {
  __typename?: 'ChangeRequest';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
  requested_by?: Maybe<Array<Maybe<User>>>;
  requested_for?: Maybe<Array<Maybe<WateringTask>>>;
  requested_to?: Maybe<Array<Maybe<User>>>;
  requested_new_task?: Maybe<Array<Maybe<WateringTask>>>;
};


export type ChangeRequestRequested_ByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type ChangeRequestRequested_ForArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};


export type ChangeRequestRequested_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type ChangeRequestRequested_New_TaskArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};

export enum _LogEventOrdering {
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  Neo4jImportIdAsc = 'neo4jImportId_asc',
  Neo4jImportIdDesc = 'neo4jImportId_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type LogEvent = {
  __typename?: 'LogEvent';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
  triggered_by?: Maybe<Array<Maybe<User>>>;
  refers_to?: Maybe<Array<Maybe<WateringTask>>>;
};


export type LogEventTriggered_ByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type LogEventRefers_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WateringTaskOrdering>>>;
  filter?: Maybe<_WateringTaskFilter>;
};

export enum _GardenOrdering {
  GardenIdAsc = 'gardenId_asc',
  GardenIdDesc = 'gardenId_desc',
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export enum _GeoShapeOrdering {
  ShapeIdAsc = 'shapeId_asc',
  ShapeIdDesc = 'shapeId_desc'
}

export type _GeoShapeFilter = {
  AND?: Maybe<Array<_GeoShapeFilter>>;
  OR?: Maybe<Array<_GeoShapeFilter>>;
  shapeId?: Maybe<Scalars['ID']>;
  shapeId_not?: Maybe<Scalars['ID']>;
  shapeId_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_not_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_contains?: Maybe<Scalars['ID']>;
  shapeId_not_contains?: Maybe<Scalars['ID']>;
  shapeId_starts_with?: Maybe<Scalars['ID']>;
  shapeId_not_starts_with?: Maybe<Scalars['ID']>;
  shapeId_ends_with?: Maybe<Scalars['ID']>;
  shapeId_not_ends_with?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<_Neo4jPointInput>>;
  points_not?: Maybe<Array<_Neo4jPointInput>>;
  points_distance?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  belongs_to?: Maybe<_GardenLayerFilter>;
  belongs_to_not?: Maybe<_GardenLayerFilter>;
  belongs_to_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_not_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_some?: Maybe<_GardenLayerFilter>;
  belongs_to_none?: Maybe<_GardenLayerFilter>;
  belongs_to_single?: Maybe<_GardenLayerFilter>;
  belongs_to_every?: Maybe<_GardenLayerFilter>;
  feature?: Maybe<_GardenFeatureFilter>;
  feature_not?: Maybe<_GardenFeatureFilter>;
  feature_in?: Maybe<Array<_GardenFeatureFilter>>;
  feature_not_in?: Maybe<Array<_GardenFeatureFilter>>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

export type _GardenLayerFilter = {
  AND?: Maybe<Array<_GardenLayerFilter>>;
  OR?: Maybe<Array<_GardenLayerFilter>>;
  layerId?: Maybe<Scalars['ID']>;
  layerId_not?: Maybe<Scalars['ID']>;
  layerId_in?: Maybe<Array<Scalars['ID']>>;
  layerId_not_in?: Maybe<Array<Scalars['ID']>>;
  layerId_contains?: Maybe<Scalars['ID']>;
  layerId_not_contains?: Maybe<Scalars['ID']>;
  layerId_starts_with?: Maybe<Scalars['ID']>;
  layerId_not_starts_with?: Maybe<Scalars['ID']>;
  layerId_ends_with?: Maybe<Scalars['ID']>;
  layerId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
  date_not?: Maybe<_Neo4jDateInput>;
  date_in?: Maybe<Array<_Neo4jDateInput>>;
  date_not_in?: Maybe<Array<_Neo4jDateInput>>;
  date_lt?: Maybe<_Neo4jDateInput>;
  date_lte?: Maybe<_Neo4jDateInput>;
  date_gt?: Maybe<_Neo4jDateInput>;
  date_gte?: Maybe<_Neo4jDateInput>;
  at?: Maybe<_GardenFilter>;
  at_not?: Maybe<_GardenFilter>;
  at_in?: Maybe<Array<_GardenFilter>>;
  at_not_in?: Maybe<Array<_GardenFilter>>;
  has_shape?: Maybe<_GeoShapeFilter>;
  has_shape_not?: Maybe<_GeoShapeFilter>;
  has_shape_in?: Maybe<Array<_GeoShapeFilter>>;
  has_shape_not_in?: Maybe<Array<_GeoShapeFilter>>;
  has_shape_some?: Maybe<_GeoShapeFilter>;
  has_shape_none?: Maybe<_GeoShapeFilter>;
  has_shape_single?: Maybe<_GeoShapeFilter>;
  has_shape_every?: Maybe<_GeoShapeFilter>;
};

export type _GardenFeatureFilter = {
  AND?: Maybe<Array<_GardenFeatureFilter>>;
  OR?: Maybe<Array<_GardenFeatureFilter>>;
  featureId?: Maybe<Scalars['ID']>;
  featureId_not?: Maybe<Scalars['ID']>;
  featureId_in?: Maybe<Array<Scalars['ID']>>;
  featureId_not_in?: Maybe<Array<Scalars['ID']>>;
  featureId_contains?: Maybe<Scalars['ID']>;
  featureId_not_contains?: Maybe<Scalars['ID']>;
  featureId_starts_with?: Maybe<Scalars['ID']>;
  featureId_not_starts_with?: Maybe<Scalars['ID']>;
  featureId_ends_with?: Maybe<Scalars['ID']>;
  featureId_not_ends_with?: Maybe<Scalars['ID']>;
  shape?: Maybe<_GeoShapeFilter>;
  shape_not?: Maybe<_GeoShapeFilter>;
  shape_in?: Maybe<Array<_GeoShapeFilter>>;
  shape_not_in?: Maybe<Array<_GeoShapeFilter>>;
  shape_some?: Maybe<_GeoShapeFilter>;
  shape_none?: Maybe<_GeoShapeFilter>;
  shape_single?: Maybe<_GeoShapeFilter>;
  shape_every?: Maybe<_GeoShapeFilter>;
  infoText?: Maybe<Scalars['String']>;
  infoText_not?: Maybe<Scalars['String']>;
  infoText_in?: Maybe<Array<Scalars['String']>>;
  infoText_not_in?: Maybe<Array<Scalars['String']>>;
  infoText_contains?: Maybe<Scalars['String']>;
  infoText_not_contains?: Maybe<Scalars['String']>;
  infoText_starts_with?: Maybe<Scalars['String']>;
  infoText_not_starts_with?: Maybe<Scalars['String']>;
  infoText_ends_with?: Maybe<Scalars['String']>;
  infoText_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['String']>;
  featureType_not?: Maybe<Scalars['String']>;
  featureType_in?: Maybe<Array<Scalars['String']>>;
  featureType_not_in?: Maybe<Array<Scalars['String']>>;
  featureType_contains?: Maybe<Scalars['String']>;
  featureType_not_contains?: Maybe<Scalars['String']>;
  featureType_starts_with?: Maybe<Scalars['String']>;
  featureType_not_starts_with?: Maybe<Scalars['String']>;
  featureType_ends_with?: Maybe<Scalars['String']>;
  featureType_not_ends_with?: Maybe<Scalars['String']>;
  plants?: Maybe<Array<Scalars['String']>>;
  plants_not?: Maybe<Array<Scalars['String']>>;
  plants_contains?: Maybe<Array<Scalars['String']>>;
  plants_not_contains?: Maybe<Array<Scalars['String']>>;
  plants_starts_with?: Maybe<Array<Scalars['String']>>;
  plants_not_starts_with?: Maybe<Array<Scalars['String']>>;
  plants_ends_with?: Maybe<Array<Scalars['String']>>;
  plants_not_ends_with?: Maybe<Array<Scalars['String']>>;
};

export type GeoShape = {
  shapeId: Scalars['ID'];
  points: Array<Maybe<_Neo4jPoint>>;
  belongs_to?: Maybe<Array<Maybe<GardenLayer>>>;
  feature?: Maybe<GardenFeature>;
};


export type GeoShapeBelongs_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenLayerOrdering>>>;
  filter?: Maybe<_GardenLayerFilter>;
};


export type GeoShapeFeatureArgs = {
  filter?: Maybe<_GardenFeatureFilter>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export enum _GardenLayerOrdering {
  LayerIdAsc = 'layerId_asc',
  LayerIdDesc = 'layerId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type GardenLayer = {
  __typename?: 'GardenLayer';
  layerId: Scalars['ID'];
  name: Scalars['String'];
  date?: Maybe<_Neo4jDate>;
  at?: Maybe<Garden>;
  has_shape?: Maybe<Array<Maybe<GeoShape>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type GardenLayerAtArgs = {
  filter?: Maybe<_GardenFilter>;
};


export type GardenLayerHas_ShapeArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GeoShapeOrdering>>>;
  filter?: Maybe<_GeoShapeFilter>;
};

export type GardenFeature = {
  __typename?: 'GardenFeature';
  featureId: Scalars['ID'];
  shape?: Maybe<Array<Maybe<GeoShape>>>;
  infoText?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  featureType: Scalars['String'];
  plants: Array<Maybe<Scalars['String']>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type GardenFeatureShapeArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GeoShapeOrdering>>>;
  filter?: Maybe<_GeoShapeFilter>;
};

export enum _PolygonShapeOrdering {
  ShapeIdAsc = 'shapeId_asc',
  ShapeIdDesc = 'shapeId_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _PolygonShapeFilter = {
  AND?: Maybe<Array<_PolygonShapeFilter>>;
  OR?: Maybe<Array<_PolygonShapeFilter>>;
  shapeId?: Maybe<Scalars['ID']>;
  shapeId_not?: Maybe<Scalars['ID']>;
  shapeId_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_not_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_contains?: Maybe<Scalars['ID']>;
  shapeId_not_contains?: Maybe<Scalars['ID']>;
  shapeId_starts_with?: Maybe<Scalars['ID']>;
  shapeId_not_starts_with?: Maybe<Scalars['ID']>;
  shapeId_ends_with?: Maybe<Scalars['ID']>;
  shapeId_not_ends_with?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<_Neo4jPointInput>>;
  points_not?: Maybe<Array<_Neo4jPointInput>>;
  points_distance?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  belongs_to?: Maybe<_GardenLayerFilter>;
  belongs_to_not?: Maybe<_GardenLayerFilter>;
  belongs_to_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_not_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_some?: Maybe<_GardenLayerFilter>;
  belongs_to_none?: Maybe<_GardenLayerFilter>;
  belongs_to_single?: Maybe<_GardenLayerFilter>;
  belongs_to_every?: Maybe<_GardenLayerFilter>;
  startPoint?: Maybe<_Neo4jPointInput>;
  startPoint_not?: Maybe<_Neo4jPointInput>;
  startPoint_distance?: Maybe<_Neo4jPointDistanceFilter>;
  startPoint_distance_lt?: Maybe<_Neo4jPointDistanceFilter>;
  startPoint_distance_lte?: Maybe<_Neo4jPointDistanceFilter>;
  startPoint_distance_gt?: Maybe<_Neo4jPointDistanceFilter>;
  startPoint_distance_gte?: Maybe<_Neo4jPointDistanceFilter>;
  feature?: Maybe<_GardenFeatureFilter>;
  feature_not?: Maybe<_GardenFeatureFilter>;
  feature_in?: Maybe<Array<_GardenFeatureFilter>>;
  feature_not_in?: Maybe<Array<_GardenFeatureFilter>>;
};

export type PolygonShape = GeoShape & {
  __typename?: 'PolygonShape';
  shapeId: Scalars['ID'];
  points: Array<Maybe<_Neo4jPoint>>;
  belongs_to?: Maybe<Array<Maybe<GardenLayer>>>;
  startPoint?: Maybe<_Neo4jPoint>;
  feature?: Maybe<GardenFeature>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type PolygonShapeBelongs_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenLayerOrdering>>>;
  filter?: Maybe<_GardenLayerFilter>;
};


export type PolygonShapeFeatureArgs = {
  filter?: Maybe<_GardenFeatureFilter>;
};

export enum _MarkerShapeOrdering {
  ShapeIdAsc = 'shapeId_asc',
  ShapeIdDesc = 'shapeId_desc',
  IconAsc = 'icon_asc',
  IconDesc = 'icon_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _MarkerShapeFilter = {
  AND?: Maybe<Array<_MarkerShapeFilter>>;
  OR?: Maybe<Array<_MarkerShapeFilter>>;
  shapeId?: Maybe<Scalars['ID']>;
  shapeId_not?: Maybe<Scalars['ID']>;
  shapeId_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_not_in?: Maybe<Array<Scalars['ID']>>;
  shapeId_contains?: Maybe<Scalars['ID']>;
  shapeId_not_contains?: Maybe<Scalars['ID']>;
  shapeId_starts_with?: Maybe<Scalars['ID']>;
  shapeId_not_starts_with?: Maybe<Scalars['ID']>;
  shapeId_ends_with?: Maybe<Scalars['ID']>;
  shapeId_not_ends_with?: Maybe<Scalars['ID']>;
  points?: Maybe<Array<_Neo4jPointInput>>;
  points_not?: Maybe<Array<_Neo4jPointInput>>;
  points_distance?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_lte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gt?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  points_distance_gte?: Maybe<Array<_Neo4jPointDistanceFilter>>;
  belongs_to?: Maybe<_GardenLayerFilter>;
  belongs_to_not?: Maybe<_GardenLayerFilter>;
  belongs_to_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_not_in?: Maybe<Array<_GardenLayerFilter>>;
  belongs_to_some?: Maybe<_GardenLayerFilter>;
  belongs_to_none?: Maybe<_GardenLayerFilter>;
  belongs_to_single?: Maybe<_GardenLayerFilter>;
  belongs_to_every?: Maybe<_GardenLayerFilter>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Scalars['String']>>;
  icon_not_in?: Maybe<Array<Scalars['String']>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  icon_starts_with?: Maybe<Scalars['String']>;
  icon_not_starts_with?: Maybe<Scalars['String']>;
  icon_ends_with?: Maybe<Scalars['String']>;
  icon_not_ends_with?: Maybe<Scalars['String']>;
  point?: Maybe<_Neo4jPointInput>;
  point_not?: Maybe<_Neo4jPointInput>;
  point_distance?: Maybe<_Neo4jPointDistanceFilter>;
  point_distance_lt?: Maybe<_Neo4jPointDistanceFilter>;
  point_distance_lte?: Maybe<_Neo4jPointDistanceFilter>;
  point_distance_gt?: Maybe<_Neo4jPointDistanceFilter>;
  point_distance_gte?: Maybe<_Neo4jPointDistanceFilter>;
  feature?: Maybe<_GardenFeatureFilter>;
  feature_not?: Maybe<_GardenFeatureFilter>;
  feature_in?: Maybe<Array<_GardenFeatureFilter>>;
  feature_not_in?: Maybe<Array<_GardenFeatureFilter>>;
};

export type MarkerShape = GeoShape & {
  __typename?: 'MarkerShape';
  shapeId: Scalars['ID'];
  points: Array<Maybe<_Neo4jPoint>>;
  belongs_to?: Maybe<Array<Maybe<GardenLayer>>>;
  icon: Scalars['String'];
  point: _Neo4jPoint;
  feature?: Maybe<GardenFeature>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type MarkerShapeBelongs_ToArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GardenLayerOrdering>>>;
  filter?: Maybe<_GardenLayerFilter>;
};


export type MarkerShapeFeatureArgs = {
  filter?: Maybe<_GardenFeatureFilter>;
};

export enum _GardenFeatureOrdering {
  FeatureIdAsc = 'featureId_asc',
  FeatureIdDesc = 'featureId_desc',
  InfoTextAsc = 'infoText_asc',
  InfoTextDesc = 'infoText_desc',
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  FeatureTypeAsc = 'featureType_asc',
  FeatureTypeDesc = 'featureType_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export enum _UserSettingsOrdering {
  UiLocaleAsc = 'ui_locale_asc',
  UiLocaleDesc = 'ui_locale_desc',
  LetitrainMaximumTasksAsc = 'letitrain_maximum_tasks_asc',
  LetitrainMaximumTasksDesc = 'letitrain_maximum_tasks_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _UserSettingsFilter = {
  AND?: Maybe<Array<_UserSettingsFilter>>;
  OR?: Maybe<Array<_UserSettingsFilter>>;
  ui_locale?: Maybe<Scalars['String']>;
  ui_locale_not?: Maybe<Scalars['String']>;
  ui_locale_in?: Maybe<Array<Scalars['String']>>;
  ui_locale_not_in?: Maybe<Array<Scalars['String']>>;
  ui_locale_contains?: Maybe<Scalars['String']>;
  ui_locale_not_contains?: Maybe<Scalars['String']>;
  ui_locale_starts_with?: Maybe<Scalars['String']>;
  ui_locale_not_starts_with?: Maybe<Scalars['String']>;
  ui_locale_ends_with?: Maybe<Scalars['String']>;
  ui_locale_not_ends_with?: Maybe<Scalars['String']>;
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
  letitrain_maximum_tasks_not?: Maybe<Scalars['Int']>;
  letitrain_maximum_tasks_in?: Maybe<Array<Scalars['Int']>>;
  letitrain_maximum_tasks_not_in?: Maybe<Array<Scalars['Int']>>;
  letitrain_maximum_tasks_lt?: Maybe<Scalars['Int']>;
  letitrain_maximum_tasks_lte?: Maybe<Scalars['Int']>;
  letitrain_maximum_tasks_gt?: Maybe<Scalars['Int']>;
  letitrain_maximum_tasks_gte?: Maybe<Scalars['Int']>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  ui_locale?: Maybe<Scalars['String']>;
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ownMergeUserSettings?: Maybe<UserSettings>;
  seedNeo4jFromJSON?: Maybe<Scalars['Boolean']>;
  setUserAvailability?: Maybe<Scalars['Boolean']>;
  seedAvailabilitiesFromTests?: Maybe<Scalars['Boolean']>;
  planWateringPeriods?: Maybe<Scalars['JSON']>;
  removeAssignment?: Maybe<Scalars['Boolean']>;
  addAssignment?: Maybe<Scalars['Boolean']>;
  pushSubscribe?: Maybe<Scalars['Boolean']>;
  publishToAll?: Maybe<Scalars['Boolean']>;
  sendWelcomeMail?: Maybe<Scalars['Boolean']>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Garden node. */
  CreateGarden?: Maybe<Garden>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Garden node. */
  UpdateGarden?: Maybe<Garden>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Garden node. */
  DeleteGarden?: Maybe<Garden>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Garden node. */
  MergeGarden?: Maybe<Garden>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the assigned relationship. */
  AddUserAssigned?: Maybe<_AddUserAssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the assigned relationship. */
  RemoveUserAssigned?: Maybe<_RemoveUserAssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the assigned relationship. */
  MergeUserAssigned?: Maybe<_MergeUserAssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the available relationship. */
  AddUserAvailable?: Maybe<_AddUserAvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the available relationship. */
  RemoveUserAvailable?: Maybe<_RemoveUserAvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the available relationship. */
  MergeUserAvailable?: Maybe<_MergeUserAvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_by relationship. */
  AddUserChangerequests_requested_by?: Maybe<_AddUserChangerequests_Requested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_by relationship. */
  RemoveUserChangerequests_requested_by?: Maybe<_RemoveUserChangerequests_Requested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_by relationship. */
  MergeUserChangerequests_requested_by?: Maybe<_MergeUserChangerequests_Requested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_to relationship. */
  AddUserChangerequests_requested_to?: Maybe<_AddUserChangerequests_Requested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_to relationship. */
  RemoveUserChangerequests_requested_to?: Maybe<_RemoveUserChangerequests_Requested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_to relationship. */
  MergeUserChangerequests_requested_to?: Maybe<_MergeUserChangerequests_Requested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the triggered_by relationship. */
  AddUserLogevents_triggered_by?: Maybe<_AddUserLogevents_Triggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the triggered_by relationship. */
  RemoveUserLogevents_triggered_by?: Maybe<_RemoveUserLogevents_Triggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the triggered_by relationship. */
  MergeUserLogevents_triggered_by?: Maybe<_MergeUserLogevents_Triggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a User node. */
  CreateUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a User node. */
  UpdateUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a User node. */
  DeleteUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a User node. */
  MergeUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the assigned relationship. */
  AddWateringTaskUsers_assigned?: Maybe<_AddWateringTaskUsers_AssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the assigned relationship. */
  RemoveWateringTaskUsers_assigned?: Maybe<_RemoveWateringTaskUsers_AssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the assigned relationship. */
  MergeWateringTaskUsers_assigned?: Maybe<_MergeWateringTaskUsers_AssignedPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_for relationship. */
  AddWateringTaskChangerequests_requested_for?: Maybe<_AddWateringTaskChangerequests_Requested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_for relationship. */
  RemoveWateringTaskChangerequests_requested_for?: Maybe<_RemoveWateringTaskChangerequests_Requested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_for relationship. */
  MergeWateringTaskChangerequests_requested_for?: Maybe<_MergeWateringTaskChangerequests_Requested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_new_task relationship. */
  AddWateringTaskChangerequests_requested_new_task?: Maybe<_AddWateringTaskChangerequests_Requested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_new_task relationship. */
  RemoveWateringTaskChangerequests_requested_new_task?: Maybe<_RemoveWateringTaskChangerequests_Requested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_new_task relationship. */
  MergeWateringTaskChangerequests_requested_new_task?: Maybe<_MergeWateringTaskChangerequests_Requested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the refers_to relationship. */
  AddWateringTaskLogevents_refers_to?: Maybe<_AddWateringTaskLogevents_Refers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the refers_to relationship. */
  RemoveWateringTaskLogevents_refers_to?: Maybe<_RemoveWateringTaskLogevents_Refers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the refers_to relationship. */
  MergeWateringTaskLogevents_refers_to?: Maybe<_MergeWateringTaskLogevents_Refers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the available relationship. */
  AddWateringTaskUsers_available?: Maybe<_AddWateringTaskUsers_AvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the available relationship. */
  RemoveWateringTaskUsers_available?: Maybe<_RemoveWateringTaskUsers_AvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the available relationship. */
  MergeWateringTaskUsers_available?: Maybe<_MergeWateringTaskUsers_AvailablePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a WateringTask node. */
  CreateWateringTask?: Maybe<WateringTask>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a WateringTask node. */
  UpdateWateringTask?: Maybe<WateringTask>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a WateringTask node. */
  DeleteWateringTask?: Maybe<WateringTask>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a WateringTask node. */
  MergeWateringTask?: Maybe<WateringTask>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a WateringPeriod node. */
  CreateWateringPeriod?: Maybe<WateringPeriod>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_by relationship. */
  AddChangeRequestRequested_by?: Maybe<_AddChangeRequestRequested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_by relationship. */
  RemoveChangeRequestRequested_by?: Maybe<_RemoveChangeRequestRequested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_by relationship. */
  MergeChangeRequestRequested_by?: Maybe<_MergeChangeRequestRequested_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_for relationship. */
  AddChangeRequestRequested_for?: Maybe<_AddChangeRequestRequested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_for relationship. */
  RemoveChangeRequestRequested_for?: Maybe<_RemoveChangeRequestRequested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_for relationship. */
  MergeChangeRequestRequested_for?: Maybe<_MergeChangeRequestRequested_ForPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_to relationship. */
  AddChangeRequestRequested_to?: Maybe<_AddChangeRequestRequested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_to relationship. */
  RemoveChangeRequestRequested_to?: Maybe<_RemoveChangeRequestRequested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_to relationship. */
  MergeChangeRequestRequested_to?: Maybe<_MergeChangeRequestRequested_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the requested_new_task relationship. */
  AddChangeRequestRequested_new_task?: Maybe<_AddChangeRequestRequested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the requested_new_task relationship. */
  RemoveChangeRequestRequested_new_task?: Maybe<_RemoveChangeRequestRequested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the requested_new_task relationship. */
  MergeChangeRequestRequested_new_task?: Maybe<_MergeChangeRequestRequested_New_TaskPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a ChangeRequest node. */
  CreateChangeRequest?: Maybe<ChangeRequest>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a ChangeRequest node. */
  UpdateChangeRequest?: Maybe<ChangeRequest>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a ChangeRequest node. */
  DeleteChangeRequest?: Maybe<ChangeRequest>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a ChangeRequest node. */
  MergeChangeRequest?: Maybe<ChangeRequest>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the triggered_by relationship. */
  AddLogEventTriggered_by?: Maybe<_AddLogEventTriggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the triggered_by relationship. */
  RemoveLogEventTriggered_by?: Maybe<_RemoveLogEventTriggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the triggered_by relationship. */
  MergeLogEventTriggered_by?: Maybe<_MergeLogEventTriggered_ByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the refers_to relationship. */
  AddLogEventRefers_to?: Maybe<_AddLogEventRefers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the refers_to relationship. */
  RemoveLogEventRefers_to?: Maybe<_RemoveLogEventRefers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the refers_to relationship. */
  MergeLogEventRefers_to?: Maybe<_MergeLogEventRefers_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a LogEvent node. */
  CreateLogEvent?: Maybe<LogEvent>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a LogEvent node. */
  UpdateLogEvent?: Maybe<LogEvent>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a LogEvent node. */
  DeleteLogEvent?: Maybe<LogEvent>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a LogEvent node. */
  MergeLogEvent?: Maybe<LogEvent>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the belongs_to relationship. */
  AddGeoShapeBelongs_to?: Maybe<_AddGeoShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the belongs_to relationship. */
  RemoveGeoShapeBelongs_to?: Maybe<_RemoveGeoShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the belongs_to relationship. */
  MergeGeoShapeBelongs_to?: Maybe<_MergeGeoShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_shape relationship. */
  AddGeoShapeFeature?: Maybe<_AddGeoShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_shape relationship. */
  RemoveGeoShapeFeature?: Maybe<_RemoveGeoShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_shape relationship. */
  MergeGeoShapeFeature?: Maybe<_MergeGeoShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the at relationship. */
  AddGardenLayerAt?: Maybe<_AddGardenLayerAtPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the at relationship. */
  RemoveGardenLayerAt?: Maybe<_RemoveGardenLayerAtPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the at relationship. */
  MergeGardenLayerAt?: Maybe<_MergeGardenLayerAtPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the belongs_to relationship. */
  AddGardenLayerHas_shape?: Maybe<_AddGardenLayerHas_ShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the belongs_to relationship. */
  RemoveGardenLayerHas_shape?: Maybe<_RemoveGardenLayerHas_ShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the belongs_to relationship. */
  MergeGardenLayerHas_shape?: Maybe<_MergeGardenLayerHas_ShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a GardenLayer node. */
  CreateGardenLayer?: Maybe<GardenLayer>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a GardenLayer node. */
  UpdateGardenLayer?: Maybe<GardenLayer>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a GardenLayer node. */
  DeleteGardenLayer?: Maybe<GardenLayer>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a GardenLayer node. */
  MergeGardenLayer?: Maybe<GardenLayer>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the belongs_to relationship. */
  AddPolygonShapeBelongs_to?: Maybe<_AddPolygonShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the belongs_to relationship. */
  RemovePolygonShapeBelongs_to?: Maybe<_RemovePolygonShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the belongs_to relationship. */
  MergePolygonShapeBelongs_to?: Maybe<_MergePolygonShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_shape relationship. */
  AddPolygonShapeFeature?: Maybe<_AddPolygonShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_shape relationship. */
  RemovePolygonShapeFeature?: Maybe<_RemovePolygonShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_shape relationship. */
  MergePolygonShapeFeature?: Maybe<_MergePolygonShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a PolygonShape node. */
  CreatePolygonShape?: Maybe<PolygonShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a PolygonShape node. */
  UpdatePolygonShape?: Maybe<PolygonShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a PolygonShape node. */
  DeletePolygonShape?: Maybe<PolygonShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a PolygonShape node. */
  MergePolygonShape?: Maybe<PolygonShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the belongs_to relationship. */
  AddMarkerShapeBelongs_to?: Maybe<_AddMarkerShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the belongs_to relationship. */
  RemoveMarkerShapeBelongs_to?: Maybe<_RemoveMarkerShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the belongs_to relationship. */
  MergeMarkerShapeBelongs_to?: Maybe<_MergeMarkerShapeBelongs_ToPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_shape relationship. */
  AddMarkerShapeFeature?: Maybe<_AddMarkerShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_shape relationship. */
  RemoveMarkerShapeFeature?: Maybe<_RemoveMarkerShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_shape relationship. */
  MergeMarkerShapeFeature?: Maybe<_MergeMarkerShapeFeaturePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a MarkerShape node. */
  CreateMarkerShape?: Maybe<MarkerShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a MarkerShape node. */
  UpdateMarkerShape?: Maybe<MarkerShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a MarkerShape node. */
  DeleteMarkerShape?: Maybe<MarkerShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a MarkerShape node. */
  MergeMarkerShape?: Maybe<MarkerShape>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_shape relationship. */
  AddGardenFeatureShape?: Maybe<_AddGardenFeatureShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_shape relationship. */
  RemoveGardenFeatureShape?: Maybe<_RemoveGardenFeatureShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_shape relationship. */
  MergeGardenFeatureShape?: Maybe<_MergeGardenFeatureShapePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a GardenFeature node. */
  CreateGardenFeature?: Maybe<GardenFeature>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a GardenFeature node. */
  UpdateGardenFeature?: Maybe<GardenFeature>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a GardenFeature node. */
  DeleteGardenFeature?: Maybe<GardenFeature>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a GardenFeature node. */
  MergeGardenFeature?: Maybe<GardenFeature>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a UserSettings node. */
  CreateUserSettings?: Maybe<UserSettings>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a UserSettings node. */
  UpdateUserSettings?: Maybe<UserSettings>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a UserSettings node. */
  DeleteUserSettings?: Maybe<UserSettings>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a UserSettings node. */
  MergeUserSettings?: Maybe<UserSettings>;
};


export type MutationOwnMergeUserSettingsArgs = {
  settings?: Maybe<UserSettingsInput>;
};


export type MutationSetUserAvailabilityArgs = {
  gardenId: Scalars['ID'];
  dates: Array<Maybe<_Neo4jDateInput>>;
  from?: Maybe<_Neo4jDateInput>;
  till?: Maybe<_Neo4jDateInput>;
};


export type MutationPlanWateringPeriodsArgs = {
  gardenId: Scalars['ID'];
  period_length?: Maybe<Scalars['Int']>;
  planning_ahead?: Maybe<Scalars['Int']>;
  periods_predefined?: Maybe<Scalars['Int']>;
};


export type MutationRemoveAssignmentArgs = {
  date: _Neo4jDateInput;
  gardenId: Scalars['ID'];
};


export type MutationAddAssignmentArgs = {
  date: _Neo4jDateInput;
  gardenId: Scalars['ID'];
};


export type MutationPushSubscribeArgs = {
  subscription?: Maybe<PushSubscriptionInput>;
};


export type MutationPublishToAllArgs = {
  message?: Maybe<PushMessageInput>;
};


export type MutationCreateGardenArgs = {
  gardenId?: Maybe<Scalars['ID']>;
  label: Scalars['String'];
};


export type MutationUpdateGardenArgs = {
  gardenId: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};


export type MutationDeleteGardenArgs = {
  gardenId: Scalars['ID'];
};


export type MutationMergeGardenArgs = {
  gardenId: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};


export type MutationAddUserAssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationRemoveUserAssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationMergeUserAssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationAddUserAvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationRemoveUserAvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationMergeUserAvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationAddUserChangerequests_Requested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationRemoveUserChangerequests_Requested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationMergeUserChangerequests_Requested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationAddUserChangerequests_Requested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationRemoveUserChangerequests_Requested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationMergeUserChangerequests_Requested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationAddUserLogevents_Triggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationRemoveUserLogevents_Triggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationMergeUserLogevents_Triggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationCreateUserArgs = {
  id: Scalars['String'];
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationMergeUserArgs = {
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationAddWateringTaskUsers_AssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationRemoveWateringTaskUsers_AssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationMergeWateringTaskUsers_AssignedArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationAddWateringTaskChangerequests_Requested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationRemoveWateringTaskChangerequests_Requested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationMergeWateringTaskChangerequests_Requested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationAddWateringTaskChangerequests_Requested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationRemoveWateringTaskChangerequests_Requested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationMergeWateringTaskChangerequests_Requested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationAddWateringTaskLogevents_Refers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationRemoveWateringTaskLogevents_Refers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationMergeWateringTaskLogevents_Refers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationAddWateringTaskUsers_AvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationRemoveWateringTaskUsers_AvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationMergeWateringTaskUsers_AvailableArgs = {
  from: _UserInput;
  to: _WateringTaskInput;
};


export type MutationCreateWateringTaskArgs = {
  date: _Neo4jDateInput;
  done?: Maybe<Scalars['Boolean']>;
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateWateringTaskArgs = {
  date?: Maybe<_Neo4jDateInput>;
  done?: Maybe<Scalars['Boolean']>;
  neo4jImportId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type MutationDeleteWateringTaskArgs = {
  neo4jImportId: Scalars['String'];
};


export type MutationMergeWateringTaskArgs = {
  date?: Maybe<_Neo4jDateInput>;
  done?: Maybe<Scalars['Boolean']>;
  neo4jImportId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type MutationCreateWateringPeriodArgs = {
  from: _Neo4jDateInput;
  till: _Neo4jDateInput;
};


export type MutationAddChangeRequestRequested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationRemoveChangeRequestRequested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationMergeChangeRequestRequested_ByArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationAddChangeRequestRequested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationRemoveChangeRequestRequested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationMergeChangeRequestRequested_ForArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationAddChangeRequestRequested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationRemoveChangeRequestRequested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationMergeChangeRequestRequested_ToArgs = {
  from: _ChangeRequestInput;
  to: _UserInput;
};


export type MutationAddChangeRequestRequested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationRemoveChangeRequestRequested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationMergeChangeRequestRequested_New_TaskArgs = {
  from: _ChangeRequestInput;
  to: _WateringTaskInput;
};


export type MutationCreateChangeRequestArgs = {
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateChangeRequestArgs = {
  label: Scalars['String'];
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationDeleteChangeRequestArgs = {
  label: Scalars['String'];
};


export type MutationMergeChangeRequestArgs = {
  label: Scalars['String'];
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationAddLogEventTriggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationRemoveLogEventTriggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationMergeLogEventTriggered_ByArgs = {
  from: _LogEventInput;
  to: _UserInput;
};


export type MutationAddLogEventRefers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationRemoveLogEventRefers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationMergeLogEventRefers_ToArgs = {
  from: _LogEventInput;
  to: _WateringTaskInput;
};


export type MutationCreateLogEventArgs = {
  date: Scalars['String'];
  label: Scalars['String'];
  neo4jImportId: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateLogEventArgs = {
  date: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationDeleteLogEventArgs = {
  date: Scalars['String'];
};


export type MutationMergeLogEventArgs = {
  date: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  neo4jImportId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationAddGeoShapeBelongs_ToArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationRemoveGeoShapeBelongs_ToArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationMergeGeoShapeBelongs_ToArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationAddGeoShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationRemoveGeoShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationMergeGeoShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationAddGardenLayerAtArgs = {
  from: _GardenLayerInput;
  to: _GardenInput;
};


export type MutationRemoveGardenLayerAtArgs = {
  from: _GardenLayerInput;
  to: _GardenInput;
};


export type MutationMergeGardenLayerAtArgs = {
  from: _GardenLayerInput;
  to: _GardenInput;
};


export type MutationAddGardenLayerHas_ShapeArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationRemoveGardenLayerHas_ShapeArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationMergeGardenLayerHas_ShapeArgs = {
  from: _GeoShapeInput;
  to: _GardenLayerInput;
};


export type MutationCreateGardenLayerArgs = {
  layerId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  date?: Maybe<_Neo4jDateInput>;
};


export type MutationUpdateGardenLayerArgs = {
  layerId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
};


export type MutationDeleteGardenLayerArgs = {
  layerId: Scalars['ID'];
};


export type MutationMergeGardenLayerArgs = {
  layerId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
};


export type MutationAddPolygonShapeBelongs_ToArgs = {
  from: _PolygonShapeInput;
  to: _GardenLayerInput;
};


export type MutationRemovePolygonShapeBelongs_ToArgs = {
  from: _PolygonShapeInput;
  to: _GardenLayerInput;
};


export type MutationMergePolygonShapeBelongs_ToArgs = {
  from: _PolygonShapeInput;
  to: _GardenLayerInput;
};


export type MutationAddPolygonShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _PolygonShapeInput;
};


export type MutationRemovePolygonShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _PolygonShapeInput;
};


export type MutationMergePolygonShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _PolygonShapeInput;
};


export type MutationCreatePolygonShapeArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  points: Array<Maybe<_Neo4jPointInput>>;
  startPoint?: Maybe<_Neo4jPointInput>;
};


export type MutationUpdatePolygonShapeArgs = {
  shapeId: Scalars['ID'];
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  startPoint?: Maybe<_Neo4jPointInput>;
};


export type MutationDeletePolygonShapeArgs = {
  shapeId: Scalars['ID'];
};


export type MutationMergePolygonShapeArgs = {
  shapeId: Scalars['ID'];
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  startPoint?: Maybe<_Neo4jPointInput>;
};


export type MutationAddMarkerShapeBelongs_ToArgs = {
  from: _MarkerShapeInput;
  to: _GardenLayerInput;
};


export type MutationRemoveMarkerShapeBelongs_ToArgs = {
  from: _MarkerShapeInput;
  to: _GardenLayerInput;
};


export type MutationMergeMarkerShapeBelongs_ToArgs = {
  from: _MarkerShapeInput;
  to: _GardenLayerInput;
};


export type MutationAddMarkerShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _MarkerShapeInput;
};


export type MutationRemoveMarkerShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _MarkerShapeInput;
};


export type MutationMergeMarkerShapeFeatureArgs = {
  from: _GardenFeatureInput;
  to: _MarkerShapeInput;
};


export type MutationCreateMarkerShapeArgs = {
  shapeId?: Maybe<Scalars['ID']>;
  points: Array<Maybe<_Neo4jPointInput>>;
  icon: Scalars['String'];
  point: _Neo4jPointInput;
};


export type MutationUpdateMarkerShapeArgs = {
  shapeId: Scalars['ID'];
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  icon?: Maybe<Scalars['String']>;
  point?: Maybe<_Neo4jPointInput>;
};


export type MutationDeleteMarkerShapeArgs = {
  shapeId: Scalars['ID'];
};


export type MutationMergeMarkerShapeArgs = {
  shapeId: Scalars['ID'];
  points?: Maybe<Array<Maybe<_Neo4jPointInput>>>;
  icon?: Maybe<Scalars['String']>;
  point?: Maybe<_Neo4jPointInput>;
};


export type MutationAddGardenFeatureShapeArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationRemoveGardenFeatureShapeArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationMergeGardenFeatureShapeArgs = {
  from: _GardenFeatureInput;
  to: _GeoShapeInput;
};


export type MutationCreateGardenFeatureArgs = {
  featureId?: Maybe<Scalars['ID']>;
  infoText?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  featureType: Scalars['String'];
  plants: Array<Maybe<Scalars['String']>>;
};


export type MutationUpdateGardenFeatureArgs = {
  featureId: Scalars['ID'];
  infoText?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['String']>;
  plants?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationDeleteGardenFeatureArgs = {
  featureId: Scalars['ID'];
};


export type MutationMergeGardenFeatureArgs = {
  featureId: Scalars['ID'];
  infoText?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  featureType?: Maybe<Scalars['String']>;
  plants?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationCreateUserSettingsArgs = {
  ui_locale?: Maybe<Scalars['String']>;
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
};


export type MutationUpdateUserSettingsArgs = {
  ui_locale: Scalars['String'];
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
};


export type MutationDeleteUserSettingsArgs = {
  ui_locale: Scalars['String'];
};


export type MutationMergeUserSettingsArgs = {
  ui_locale: Scalars['String'];
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
};

export type UserSettingsInput = {
  ui_locale?: Maybe<Scalars['String']>;
  letitrain_maximum_tasks?: Maybe<Scalars['Int']>;
};


export type PushSubscriptionInput = {
  endpoint: Scalars['String'];
  expirationTime?: Maybe<Scalars['Int']>;
  keys: PushKeyInput;
};

export type PushKeyInput = {
  auth: Scalars['String'];
  p256dh: Scalars['String'];
};

export type PushMessageInput = {
  title: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type _UserInput = {
  id: Scalars['String'];
};

export type _WateringTaskInput = {
  neo4jImportId: Scalars['String'];
};

export type _AddUserAssignedPayload = {
  __typename?: '_AddUserAssignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveUserAssignedPayload = {
  __typename?: '_RemoveUserAssignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeUserAssignedPayload = {
  __typename?: '_MergeUserAssignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddUserAvailablePayload = {
  __typename?: '_AddUserAvailablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveUserAvailablePayload = {
  __typename?: '_RemoveUserAvailablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeUserAvailablePayload = {
  __typename?: '_MergeUserAvailablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _ChangeRequestInput = {
  label: Scalars['String'];
};

export type _AddUserChangerequests_Requested_ByPayload = {
  __typename?: '_AddUserChangerequests_requested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveUserChangerequests_Requested_ByPayload = {
  __typename?: '_RemoveUserChangerequests_requested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeUserChangerequests_Requested_ByPayload = {
  __typename?: '_MergeUserChangerequests_requested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddUserChangerequests_Requested_ToPayload = {
  __typename?: '_AddUserChangerequests_requested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveUserChangerequests_Requested_ToPayload = {
  __typename?: '_RemoveUserChangerequests_requested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeUserChangerequests_Requested_ToPayload = {
  __typename?: '_MergeUserChangerequests_requested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _LogEventInput = {
  date: Scalars['String'];
};

export type _AddUserLogevents_Triggered_ByPayload = {
  __typename?: '_AddUserLogevents_triggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveUserLogevents_Triggered_ByPayload = {
  __typename?: '_RemoveUserLogevents_triggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeUserLogevents_Triggered_ByPayload = {
  __typename?: '_MergeUserLogevents_triggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddWateringTaskUsers_AssignedPayload = {
  __typename?: '_AddWateringTaskUsers_assignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveWateringTaskUsers_AssignedPayload = {
  __typename?: '_RemoveWateringTaskUsers_assignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeWateringTaskUsers_AssignedPayload = {
  __typename?: '_MergeWateringTaskUsers_assignedPayload';
  /** Field for the User node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this assigned [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddWateringTaskChangerequests_Requested_ForPayload = {
  __typename?: '_AddWateringTaskChangerequests_requested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveWateringTaskChangerequests_Requested_ForPayload = {
  __typename?: '_RemoveWateringTaskChangerequests_requested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeWateringTaskChangerequests_Requested_ForPayload = {
  __typename?: '_MergeWateringTaskChangerequests_requested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddWateringTaskChangerequests_Requested_New_TaskPayload = {
  __typename?: '_AddWateringTaskChangerequests_requested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveWateringTaskChangerequests_Requested_New_TaskPayload = {
  __typename?: '_RemoveWateringTaskChangerequests_requested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeWateringTaskChangerequests_Requested_New_TaskPayload = {
  __typename?: '_MergeWateringTaskChangerequests_requested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddWateringTaskLogevents_Refers_ToPayload = {
  __typename?: '_AddWateringTaskLogevents_refers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveWateringTaskLogevents_Refers_ToPayload = {
  __typename?: '_RemoveWateringTaskLogevents_refers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeWateringTaskLogevents_Refers_ToPayload = {
  __typename?: '_MergeWateringTaskLogevents_refers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddWateringTaskUsers_AvailablePayload = {
  __typename?: '_AddWateringTaskUsers_availablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveWateringTaskUsers_AvailablePayload = {
  __typename?: '_RemoveWateringTaskUsers_availablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeWateringTaskUsers_AvailablePayload = {
  __typename?: '_MergeWateringTaskUsers_availablePayload';
  /** Field for the User node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the WateringTask node this available [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddChangeRequestRequested_ByPayload = {
  __typename?: '_AddChangeRequestRequested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveChangeRequestRequested_ByPayload = {
  __typename?: '_RemoveChangeRequestRequested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeChangeRequestRequested_ByPayload = {
  __typename?: '_MergeChangeRequestRequested_byPayload';
  /** Field for the ChangeRequest node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddChangeRequestRequested_ForPayload = {
  __typename?: '_AddChangeRequestRequested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveChangeRequestRequested_ForPayload = {
  __typename?: '_RemoveChangeRequestRequested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeChangeRequestRequested_ForPayload = {
  __typename?: '_MergeChangeRequestRequested_forPayload';
  /** Field for the ChangeRequest node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_for [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddChangeRequestRequested_ToPayload = {
  __typename?: '_AddChangeRequestRequested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveChangeRequestRequested_ToPayload = {
  __typename?: '_RemoveChangeRequestRequested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeChangeRequestRequested_ToPayload = {
  __typename?: '_MergeChangeRequestRequested_toPayload';
  /** Field for the ChangeRequest node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the User node this requested_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddChangeRequestRequested_New_TaskPayload = {
  __typename?: '_AddChangeRequestRequested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveChangeRequestRequested_New_TaskPayload = {
  __typename?: '_RemoveChangeRequestRequested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeChangeRequestRequested_New_TaskPayload = {
  __typename?: '_MergeChangeRequestRequested_new_taskPayload';
  /** Field for the ChangeRequest node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ChangeRequest>;
  /** Field for the WateringTask node this requested_new_task [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _AddLogEventTriggered_ByPayload = {
  __typename?: '_AddLogEventTriggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveLogEventTriggered_ByPayload = {
  __typename?: '_RemoveLogEventTriggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeLogEventTriggered_ByPayload = {
  __typename?: '_MergeLogEventTriggered_byPayload';
  /** Field for the LogEvent node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the User node this triggered_by [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddLogEventRefers_ToPayload = {
  __typename?: '_AddLogEventRefers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _RemoveLogEventRefers_ToPayload = {
  __typename?: '_RemoveLogEventRefers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _MergeLogEventRefers_ToPayload = {
  __typename?: '_MergeLogEventRefers_toPayload';
  /** Field for the LogEvent node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<LogEvent>;
  /** Field for the WateringTask node this refers_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<WateringTask>;
};

export type _GeoShapeInput = {
  shapeId: Scalars['ID'];
};

export type _GardenLayerInput = {
  layerId: Scalars['ID'];
};

export type _AddGeoShapeBelongs_ToPayload = {
  __typename?: '_AddGeoShapeBelongs_toPayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _RemoveGeoShapeBelongs_ToPayload = {
  __typename?: '_RemoveGeoShapeBelongs_toPayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _MergeGeoShapeBelongs_ToPayload = {
  __typename?: '_MergeGeoShapeBelongs_toPayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _GardenFeatureInput = {
  featureId: Scalars['ID'];
};

export type _AddGeoShapeFeaturePayload = {
  __typename?: '_AddGeoShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type _RemoveGeoShapeFeaturePayload = {
  __typename?: '_RemoveGeoShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type _MergeGeoShapeFeaturePayload = {
  __typename?: '_MergeGeoShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type _GardenInput = {
  gardenId: Scalars['ID'];
};

export type _AddGardenLayerAtPayload = {
  __typename?: '_AddGardenLayerAtPayload';
  /** Field for the GardenLayer node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenLayer>;
  /** Field for the Garden node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Garden>;
};

export type _RemoveGardenLayerAtPayload = {
  __typename?: '_RemoveGardenLayerAtPayload';
  /** Field for the GardenLayer node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenLayer>;
  /** Field for the Garden node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Garden>;
};

export type _MergeGardenLayerAtPayload = {
  __typename?: '_MergeGardenLayerAtPayload';
  /** Field for the GardenLayer node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenLayer>;
  /** Field for the Garden node this at [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Garden>;
};

export type _AddGardenLayerHas_ShapePayload = {
  __typename?: '_AddGardenLayerHas_shapePayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _RemoveGardenLayerHas_ShapePayload = {
  __typename?: '_RemoveGardenLayerHas_shapePayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _MergeGardenLayerHas_ShapePayload = {
  __typename?: '_MergeGardenLayerHas_shapePayload';
  /** Field for the GeoShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GeoShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _PolygonShapeInput = {
  shapeId: Scalars['ID'];
};

export type _AddPolygonShapeBelongs_ToPayload = {
  __typename?: '_AddPolygonShapeBelongs_toPayload';
  /** Field for the PolygonShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<PolygonShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _RemovePolygonShapeBelongs_ToPayload = {
  __typename?: '_RemovePolygonShapeBelongs_toPayload';
  /** Field for the PolygonShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<PolygonShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _MergePolygonShapeBelongs_ToPayload = {
  __typename?: '_MergePolygonShapeBelongs_toPayload';
  /** Field for the PolygonShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<PolygonShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _AddPolygonShapeFeaturePayload = {
  __typename?: '_AddPolygonShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the PolygonShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<PolygonShape>;
};

export type _RemovePolygonShapeFeaturePayload = {
  __typename?: '_RemovePolygonShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the PolygonShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<PolygonShape>;
};

export type _MergePolygonShapeFeaturePayload = {
  __typename?: '_MergePolygonShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the PolygonShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<PolygonShape>;
};

export type _MarkerShapeInput = {
  shapeId: Scalars['ID'];
};

export type _AddMarkerShapeBelongs_ToPayload = {
  __typename?: '_AddMarkerShapeBelongs_toPayload';
  /** Field for the MarkerShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<MarkerShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _RemoveMarkerShapeBelongs_ToPayload = {
  __typename?: '_RemoveMarkerShapeBelongs_toPayload';
  /** Field for the MarkerShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<MarkerShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _MergeMarkerShapeBelongs_ToPayload = {
  __typename?: '_MergeMarkerShapeBelongs_toPayload';
  /** Field for the MarkerShape node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<MarkerShape>;
  /** Field for the GardenLayer node this belongs_to [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GardenLayer>;
};

export type _AddMarkerShapeFeaturePayload = {
  __typename?: '_AddMarkerShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the MarkerShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<MarkerShape>;
};

export type _RemoveMarkerShapeFeaturePayload = {
  __typename?: '_RemoveMarkerShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the MarkerShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<MarkerShape>;
};

export type _MergeMarkerShapeFeaturePayload = {
  __typename?: '_MergeMarkerShapeFeaturePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the MarkerShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<MarkerShape>;
};

export type _AddGardenFeatureShapePayload = {
  __typename?: '_AddGardenFeatureShapePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type _RemoveGardenFeatureShapePayload = {
  __typename?: '_RemoveGardenFeatureShapePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type _MergeGardenFeatureShapePayload = {
  __typename?: '_MergeGardenFeatureShapePayload';
  /** Field for the GardenFeature node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<GardenFeature>;
  /** Field for the GeoShape node this has_shape [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<GeoShape>;
};

export type Subscription = {
  __typename?: 'Subscription';
  WateringTaskChange?: Maybe<Scalars['Boolean']>;
};

export type _UserSettingsInput = {
  ui_locale: Scalars['String'];
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | (( ...args: any[] ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs> )
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = ( obj: T, context: TContext, info: GraphQLResolveInfo ) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  _WateringPeriodOrdering: _WateringPeriodOrdering;
  WateringPeriod: ResolverTypeWrapper<WateringPeriod>;
  _Neo4jDate: ResolverTypeWrapper<_Neo4jDate>;
  _GardenFilter: _GardenFilter;
  Garden: ResolverTypeWrapper<Garden>;
  _WateringTaskOrdering: _WateringTaskOrdering;
  _WateringTaskFilter: _WateringTaskFilter;
  _Neo4jDateInput: _Neo4jDateInput;
  _UserFilter: _UserFilter;
  _ChangeRequestFilter: _ChangeRequestFilter;
  _LogEventFilter: _LogEventFilter;
  _WateringPeriodFilter: _WateringPeriodFilter;
  WateringTask: ResolverTypeWrapper<WateringTask>;
  _UserOrdering: _UserOrdering;
  User: ResolverTypeWrapper<User>;
  _ChangeRequestOrdering: _ChangeRequestOrdering;
  ChangeRequest: ResolverTypeWrapper<ChangeRequest>;
  _LogEventOrdering: _LogEventOrdering;
  LogEvent: ResolverTypeWrapper<LogEvent>;
  _GardenOrdering: _GardenOrdering;
  _Neo4jPointInput: _Neo4jPointInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  _GeoShapeOrdering: _GeoShapeOrdering;
  _GeoShapeFilter: _GeoShapeFilter;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _GardenLayerFilter: _GardenLayerFilter;
  _GardenFeatureFilter: _GardenFeatureFilter;
  GeoShape: ResolversTypes['PolygonShape'] | ResolversTypes['MarkerShape'];
  _Neo4jPoint: ResolverTypeWrapper<_Neo4jPoint>;
  _GardenLayerOrdering: _GardenLayerOrdering;
  GardenLayer: ResolverTypeWrapper<GardenLayer>;
  GardenFeature: ResolverTypeWrapper<GardenFeature>;
  _PolygonShapeOrdering: _PolygonShapeOrdering;
  _PolygonShapeFilter: _PolygonShapeFilter;
  PolygonShape: ResolverTypeWrapper<PolygonShape>;
  _MarkerShapeOrdering: _MarkerShapeOrdering;
  _MarkerShapeFilter: _MarkerShapeFilter;
  MarkerShape: ResolverTypeWrapper<MarkerShape>;
  _GardenFeatureOrdering: _GardenFeatureOrdering;
  _UserSettingsOrdering: _UserSettingsOrdering;
  _UserSettingsFilter: _UserSettingsFilter;
  UserSettings: ResolverTypeWrapper<UserSettings>;
  Mutation: ResolverTypeWrapper<{}>;
  UserSettingsInput: UserSettingsInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  PushSubscriptionInput: PushSubscriptionInput;
  PushKeyInput: PushKeyInput;
  PushMessageInput: PushMessageInput;
  _UserInput: _UserInput;
  _WateringTaskInput: _WateringTaskInput;
  _AddUserAssignedPayload: ResolverTypeWrapper<_AddUserAssignedPayload>;
  _RemoveUserAssignedPayload: ResolverTypeWrapper<_RemoveUserAssignedPayload>;
  _MergeUserAssignedPayload: ResolverTypeWrapper<_MergeUserAssignedPayload>;
  _AddUserAvailablePayload: ResolverTypeWrapper<_AddUserAvailablePayload>;
  _RemoveUserAvailablePayload: ResolverTypeWrapper<_RemoveUserAvailablePayload>;
  _MergeUserAvailablePayload: ResolverTypeWrapper<_MergeUserAvailablePayload>;
  _ChangeRequestInput: _ChangeRequestInput;
  _AddUserChangerequests_requested_byPayload: ResolverTypeWrapper<_AddUserChangerequests_Requested_ByPayload>;
  _RemoveUserChangerequests_requested_byPayload: ResolverTypeWrapper<_RemoveUserChangerequests_Requested_ByPayload>;
  _MergeUserChangerequests_requested_byPayload: ResolverTypeWrapper<_MergeUserChangerequests_Requested_ByPayload>;
  _AddUserChangerequests_requested_toPayload: ResolverTypeWrapper<_AddUserChangerequests_Requested_ToPayload>;
  _RemoveUserChangerequests_requested_toPayload: ResolverTypeWrapper<_RemoveUserChangerequests_Requested_ToPayload>;
  _MergeUserChangerequests_requested_toPayload: ResolverTypeWrapper<_MergeUserChangerequests_Requested_ToPayload>;
  _LogEventInput: _LogEventInput;
  _AddUserLogevents_triggered_byPayload: ResolverTypeWrapper<_AddUserLogevents_Triggered_ByPayload>;
  _RemoveUserLogevents_triggered_byPayload: ResolverTypeWrapper<_RemoveUserLogevents_Triggered_ByPayload>;
  _MergeUserLogevents_triggered_byPayload: ResolverTypeWrapper<_MergeUserLogevents_Triggered_ByPayload>;
  _AddWateringTaskUsers_assignedPayload: ResolverTypeWrapper<_AddWateringTaskUsers_AssignedPayload>;
  _RemoveWateringTaskUsers_assignedPayload: ResolverTypeWrapper<_RemoveWateringTaskUsers_AssignedPayload>;
  _MergeWateringTaskUsers_assignedPayload: ResolverTypeWrapper<_MergeWateringTaskUsers_AssignedPayload>;
  _AddWateringTaskChangerequests_requested_forPayload: ResolverTypeWrapper<_AddWateringTaskChangerequests_Requested_ForPayload>;
  _RemoveWateringTaskChangerequests_requested_forPayload: ResolverTypeWrapper<_RemoveWateringTaskChangerequests_Requested_ForPayload>;
  _MergeWateringTaskChangerequests_requested_forPayload: ResolverTypeWrapper<_MergeWateringTaskChangerequests_Requested_ForPayload>;
  _AddWateringTaskChangerequests_requested_new_taskPayload: ResolverTypeWrapper<_AddWateringTaskChangerequests_Requested_New_TaskPayload>;
  _RemoveWateringTaskChangerequests_requested_new_taskPayload: ResolverTypeWrapper<_RemoveWateringTaskChangerequests_Requested_New_TaskPayload>;
  _MergeWateringTaskChangerequests_requested_new_taskPayload: ResolverTypeWrapper<_MergeWateringTaskChangerequests_Requested_New_TaskPayload>;
  _AddWateringTaskLogevents_refers_toPayload: ResolverTypeWrapper<_AddWateringTaskLogevents_Refers_ToPayload>;
  _RemoveWateringTaskLogevents_refers_toPayload: ResolverTypeWrapper<_RemoveWateringTaskLogevents_Refers_ToPayload>;
  _MergeWateringTaskLogevents_refers_toPayload: ResolverTypeWrapper<_MergeWateringTaskLogevents_Refers_ToPayload>;
  _AddWateringTaskUsers_availablePayload: ResolverTypeWrapper<_AddWateringTaskUsers_AvailablePayload>;
  _RemoveWateringTaskUsers_availablePayload: ResolverTypeWrapper<_RemoveWateringTaskUsers_AvailablePayload>;
  _MergeWateringTaskUsers_availablePayload: ResolverTypeWrapper<_MergeWateringTaskUsers_AvailablePayload>;
  _AddChangeRequestRequested_byPayload: ResolverTypeWrapper<_AddChangeRequestRequested_ByPayload>;
  _RemoveChangeRequestRequested_byPayload: ResolverTypeWrapper<_RemoveChangeRequestRequested_ByPayload>;
  _MergeChangeRequestRequested_byPayload: ResolverTypeWrapper<_MergeChangeRequestRequested_ByPayload>;
  _AddChangeRequestRequested_forPayload: ResolverTypeWrapper<_AddChangeRequestRequested_ForPayload>;
  _RemoveChangeRequestRequested_forPayload: ResolverTypeWrapper<_RemoveChangeRequestRequested_ForPayload>;
  _MergeChangeRequestRequested_forPayload: ResolverTypeWrapper<_MergeChangeRequestRequested_ForPayload>;
  _AddChangeRequestRequested_toPayload: ResolverTypeWrapper<_AddChangeRequestRequested_ToPayload>;
  _RemoveChangeRequestRequested_toPayload: ResolverTypeWrapper<_RemoveChangeRequestRequested_ToPayload>;
  _MergeChangeRequestRequested_toPayload: ResolverTypeWrapper<_MergeChangeRequestRequested_ToPayload>;
  _AddChangeRequestRequested_new_taskPayload: ResolverTypeWrapper<_AddChangeRequestRequested_New_TaskPayload>;
  _RemoveChangeRequestRequested_new_taskPayload: ResolverTypeWrapper<_RemoveChangeRequestRequested_New_TaskPayload>;
  _MergeChangeRequestRequested_new_taskPayload: ResolverTypeWrapper<_MergeChangeRequestRequested_New_TaskPayload>;
  _AddLogEventTriggered_byPayload: ResolverTypeWrapper<_AddLogEventTriggered_ByPayload>;
  _RemoveLogEventTriggered_byPayload: ResolverTypeWrapper<_RemoveLogEventTriggered_ByPayload>;
  _MergeLogEventTriggered_byPayload: ResolverTypeWrapper<_MergeLogEventTriggered_ByPayload>;
  _AddLogEventRefers_toPayload: ResolverTypeWrapper<_AddLogEventRefers_ToPayload>;
  _RemoveLogEventRefers_toPayload: ResolverTypeWrapper<_RemoveLogEventRefers_ToPayload>;
  _MergeLogEventRefers_toPayload: ResolverTypeWrapper<_MergeLogEventRefers_ToPayload>;
  _GeoShapeInput: _GeoShapeInput;
  _GardenLayerInput: _GardenLayerInput;
  _AddGeoShapeBelongs_toPayload: ResolverTypeWrapper<_AddGeoShapeBelongs_ToPayload>;
  _RemoveGeoShapeBelongs_toPayload: ResolverTypeWrapper<_RemoveGeoShapeBelongs_ToPayload>;
  _MergeGeoShapeBelongs_toPayload: ResolverTypeWrapper<_MergeGeoShapeBelongs_ToPayload>;
  _GardenFeatureInput: _GardenFeatureInput;
  _AddGeoShapeFeaturePayload: ResolverTypeWrapper<_AddGeoShapeFeaturePayload>;
  _RemoveGeoShapeFeaturePayload: ResolverTypeWrapper<_RemoveGeoShapeFeaturePayload>;
  _MergeGeoShapeFeaturePayload: ResolverTypeWrapper<_MergeGeoShapeFeaturePayload>;
  _GardenInput: _GardenInput;
  _AddGardenLayerAtPayload: ResolverTypeWrapper<_AddGardenLayerAtPayload>;
  _RemoveGardenLayerAtPayload: ResolverTypeWrapper<_RemoveGardenLayerAtPayload>;
  _MergeGardenLayerAtPayload: ResolverTypeWrapper<_MergeGardenLayerAtPayload>;
  _AddGardenLayerHas_shapePayload: ResolverTypeWrapper<_AddGardenLayerHas_ShapePayload>;
  _RemoveGardenLayerHas_shapePayload: ResolverTypeWrapper<_RemoveGardenLayerHas_ShapePayload>;
  _MergeGardenLayerHas_shapePayload: ResolverTypeWrapper<_MergeGardenLayerHas_ShapePayload>;
  _PolygonShapeInput: _PolygonShapeInput;
  _AddPolygonShapeBelongs_toPayload: ResolverTypeWrapper<_AddPolygonShapeBelongs_ToPayload>;
  _RemovePolygonShapeBelongs_toPayload: ResolverTypeWrapper<_RemovePolygonShapeBelongs_ToPayload>;
  _MergePolygonShapeBelongs_toPayload: ResolverTypeWrapper<_MergePolygonShapeBelongs_ToPayload>;
  _AddPolygonShapeFeaturePayload: ResolverTypeWrapper<_AddPolygonShapeFeaturePayload>;
  _RemovePolygonShapeFeaturePayload: ResolverTypeWrapper<_RemovePolygonShapeFeaturePayload>;
  _MergePolygonShapeFeaturePayload: ResolverTypeWrapper<_MergePolygonShapeFeaturePayload>;
  _MarkerShapeInput: _MarkerShapeInput;
  _AddMarkerShapeBelongs_toPayload: ResolverTypeWrapper<_AddMarkerShapeBelongs_ToPayload>;
  _RemoveMarkerShapeBelongs_toPayload: ResolverTypeWrapper<_RemoveMarkerShapeBelongs_ToPayload>;
  _MergeMarkerShapeBelongs_toPayload: ResolverTypeWrapper<_MergeMarkerShapeBelongs_ToPayload>;
  _AddMarkerShapeFeaturePayload: ResolverTypeWrapper<_AddMarkerShapeFeaturePayload>;
  _RemoveMarkerShapeFeaturePayload: ResolverTypeWrapper<_RemoveMarkerShapeFeaturePayload>;
  _MergeMarkerShapeFeaturePayload: ResolverTypeWrapper<_MergeMarkerShapeFeaturePayload>;
  _AddGardenFeatureShapePayload: ResolverTypeWrapper<_AddGardenFeatureShapePayload>;
  _RemoveGardenFeatureShapePayload: ResolverTypeWrapper<_RemoveGardenFeatureShapePayload>;
  _MergeGardenFeatureShapePayload: ResolverTypeWrapper<_MergeGardenFeatureShapePayload>;
  Subscription: ResolverTypeWrapper<{}>;
  _UserSettingsInput: _UserSettingsInput;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jTime: ResolverTypeWrapper<_Neo4jTime>;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jDateTime: ResolverTypeWrapper<_Neo4jDateTime>;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalTime: ResolverTypeWrapper<_Neo4jLocalTime>;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalDateTime: ResolverTypeWrapper<_Neo4jLocalDateTime>;
  _RelationDirections: _RelationDirections;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  WateringPeriod: WateringPeriod;
  _Neo4jDate: _Neo4jDate;
  _GardenFilter: _GardenFilter;
  Garden: Garden;
  _WateringTaskFilter: _WateringTaskFilter;
  _Neo4jDateInput: _Neo4jDateInput;
  _UserFilter: _UserFilter;
  _ChangeRequestFilter: _ChangeRequestFilter;
  _LogEventFilter: _LogEventFilter;
  _WateringPeriodFilter: _WateringPeriodFilter;
  WateringTask: WateringTask;
  User: User;
  ChangeRequest: ChangeRequest;
  LogEvent: LogEvent;
  _Neo4jPointInput: _Neo4jPointInput;
  Float: Scalars['Float'];
  _GeoShapeFilter: _GeoShapeFilter;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _GardenLayerFilter: _GardenLayerFilter;
  _GardenFeatureFilter: _GardenFeatureFilter;
  GeoShape: ResolversParentTypes['PolygonShape'] | ResolversParentTypes['MarkerShape'];
  _Neo4jPoint: _Neo4jPoint;
  GardenLayer: GardenLayer;
  GardenFeature: GardenFeature;
  _PolygonShapeFilter: _PolygonShapeFilter;
  PolygonShape: PolygonShape;
  _MarkerShapeFilter: _MarkerShapeFilter;
  MarkerShape: MarkerShape;
  _UserSettingsFilter: _UserSettingsFilter;
  UserSettings: UserSettings;
  Mutation: {};
  UserSettingsInput: UserSettingsInput;
  JSON: Scalars['JSON'];
  PushSubscriptionInput: PushSubscriptionInput;
  PushKeyInput: PushKeyInput;
  PushMessageInput: PushMessageInput;
  _UserInput: _UserInput;
  _WateringTaskInput: _WateringTaskInput;
  _AddUserAssignedPayload: _AddUserAssignedPayload;
  _RemoveUserAssignedPayload: _RemoveUserAssignedPayload;
  _MergeUserAssignedPayload: _MergeUserAssignedPayload;
  _AddUserAvailablePayload: _AddUserAvailablePayload;
  _RemoveUserAvailablePayload: _RemoveUserAvailablePayload;
  _MergeUserAvailablePayload: _MergeUserAvailablePayload;
  _ChangeRequestInput: _ChangeRequestInput;
  _AddUserChangerequests_requested_byPayload: _AddUserChangerequests_Requested_ByPayload;
  _RemoveUserChangerequests_requested_byPayload: _RemoveUserChangerequests_Requested_ByPayload;
  _MergeUserChangerequests_requested_byPayload: _MergeUserChangerequests_Requested_ByPayload;
  _AddUserChangerequests_requested_toPayload: _AddUserChangerequests_Requested_ToPayload;
  _RemoveUserChangerequests_requested_toPayload: _RemoveUserChangerequests_Requested_ToPayload;
  _MergeUserChangerequests_requested_toPayload: _MergeUserChangerequests_Requested_ToPayload;
  _LogEventInput: _LogEventInput;
  _AddUserLogevents_triggered_byPayload: _AddUserLogevents_Triggered_ByPayload;
  _RemoveUserLogevents_triggered_byPayload: _RemoveUserLogevents_Triggered_ByPayload;
  _MergeUserLogevents_triggered_byPayload: _MergeUserLogevents_Triggered_ByPayload;
  _AddWateringTaskUsers_assignedPayload: _AddWateringTaskUsers_AssignedPayload;
  _RemoveWateringTaskUsers_assignedPayload: _RemoveWateringTaskUsers_AssignedPayload;
  _MergeWateringTaskUsers_assignedPayload: _MergeWateringTaskUsers_AssignedPayload;
  _AddWateringTaskChangerequests_requested_forPayload: _AddWateringTaskChangerequests_Requested_ForPayload;
  _RemoveWateringTaskChangerequests_requested_forPayload: _RemoveWateringTaskChangerequests_Requested_ForPayload;
  _MergeWateringTaskChangerequests_requested_forPayload: _MergeWateringTaskChangerequests_Requested_ForPayload;
  _AddWateringTaskChangerequests_requested_new_taskPayload: _AddWateringTaskChangerequests_Requested_New_TaskPayload;
  _RemoveWateringTaskChangerequests_requested_new_taskPayload: _RemoveWateringTaskChangerequests_Requested_New_TaskPayload;
  _MergeWateringTaskChangerequests_requested_new_taskPayload: _MergeWateringTaskChangerequests_Requested_New_TaskPayload;
  _AddWateringTaskLogevents_refers_toPayload: _AddWateringTaskLogevents_Refers_ToPayload;
  _RemoveWateringTaskLogevents_refers_toPayload: _RemoveWateringTaskLogevents_Refers_ToPayload;
  _MergeWateringTaskLogevents_refers_toPayload: _MergeWateringTaskLogevents_Refers_ToPayload;
  _AddWateringTaskUsers_availablePayload: _AddWateringTaskUsers_AvailablePayload;
  _RemoveWateringTaskUsers_availablePayload: _RemoveWateringTaskUsers_AvailablePayload;
  _MergeWateringTaskUsers_availablePayload: _MergeWateringTaskUsers_AvailablePayload;
  _AddChangeRequestRequested_byPayload: _AddChangeRequestRequested_ByPayload;
  _RemoveChangeRequestRequested_byPayload: _RemoveChangeRequestRequested_ByPayload;
  _MergeChangeRequestRequested_byPayload: _MergeChangeRequestRequested_ByPayload;
  _AddChangeRequestRequested_forPayload: _AddChangeRequestRequested_ForPayload;
  _RemoveChangeRequestRequested_forPayload: _RemoveChangeRequestRequested_ForPayload;
  _MergeChangeRequestRequested_forPayload: _MergeChangeRequestRequested_ForPayload;
  _AddChangeRequestRequested_toPayload: _AddChangeRequestRequested_ToPayload;
  _RemoveChangeRequestRequested_toPayload: _RemoveChangeRequestRequested_ToPayload;
  _MergeChangeRequestRequested_toPayload: _MergeChangeRequestRequested_ToPayload;
  _AddChangeRequestRequested_new_taskPayload: _AddChangeRequestRequested_New_TaskPayload;
  _RemoveChangeRequestRequested_new_taskPayload: _RemoveChangeRequestRequested_New_TaskPayload;
  _MergeChangeRequestRequested_new_taskPayload: _MergeChangeRequestRequested_New_TaskPayload;
  _AddLogEventTriggered_byPayload: _AddLogEventTriggered_ByPayload;
  _RemoveLogEventTriggered_byPayload: _RemoveLogEventTriggered_ByPayload;
  _MergeLogEventTriggered_byPayload: _MergeLogEventTriggered_ByPayload;
  _AddLogEventRefers_toPayload: _AddLogEventRefers_ToPayload;
  _RemoveLogEventRefers_toPayload: _RemoveLogEventRefers_ToPayload;
  _MergeLogEventRefers_toPayload: _MergeLogEventRefers_ToPayload;
  _GeoShapeInput: _GeoShapeInput;
  _GardenLayerInput: _GardenLayerInput;
  _AddGeoShapeBelongs_toPayload: _AddGeoShapeBelongs_ToPayload;
  _RemoveGeoShapeBelongs_toPayload: _RemoveGeoShapeBelongs_ToPayload;
  _MergeGeoShapeBelongs_toPayload: _MergeGeoShapeBelongs_ToPayload;
  _GardenFeatureInput: _GardenFeatureInput;
  _AddGeoShapeFeaturePayload: _AddGeoShapeFeaturePayload;
  _RemoveGeoShapeFeaturePayload: _RemoveGeoShapeFeaturePayload;
  _MergeGeoShapeFeaturePayload: _MergeGeoShapeFeaturePayload;
  _GardenInput: _GardenInput;
  _AddGardenLayerAtPayload: _AddGardenLayerAtPayload;
  _RemoveGardenLayerAtPayload: _RemoveGardenLayerAtPayload;
  _MergeGardenLayerAtPayload: _MergeGardenLayerAtPayload;
  _AddGardenLayerHas_shapePayload: _AddGardenLayerHas_ShapePayload;
  _RemoveGardenLayerHas_shapePayload: _RemoveGardenLayerHas_ShapePayload;
  _MergeGardenLayerHas_shapePayload: _MergeGardenLayerHas_ShapePayload;
  _PolygonShapeInput: _PolygonShapeInput;
  _AddPolygonShapeBelongs_toPayload: _AddPolygonShapeBelongs_ToPayload;
  _RemovePolygonShapeBelongs_toPayload: _RemovePolygonShapeBelongs_ToPayload;
  _MergePolygonShapeBelongs_toPayload: _MergePolygonShapeBelongs_ToPayload;
  _AddPolygonShapeFeaturePayload: _AddPolygonShapeFeaturePayload;
  _RemovePolygonShapeFeaturePayload: _RemovePolygonShapeFeaturePayload;
  _MergePolygonShapeFeaturePayload: _MergePolygonShapeFeaturePayload;
  _MarkerShapeInput: _MarkerShapeInput;
  _AddMarkerShapeBelongs_toPayload: _AddMarkerShapeBelongs_ToPayload;
  _RemoveMarkerShapeBelongs_toPayload: _RemoveMarkerShapeBelongs_ToPayload;
  _MergeMarkerShapeBelongs_toPayload: _MergeMarkerShapeBelongs_ToPayload;
  _AddMarkerShapeFeaturePayload: _AddMarkerShapeFeaturePayload;
  _RemoveMarkerShapeFeaturePayload: _RemoveMarkerShapeFeaturePayload;
  _MergeMarkerShapeFeaturePayload: _MergeMarkerShapeFeaturePayload;
  _AddGardenFeatureShapePayload: _AddGardenFeatureShapePayload;
  _RemoveGardenFeatureShapePayload: _RemoveGardenFeatureShapePayload;
  _MergeGardenFeatureShapePayload: _MergeGardenFeatureShapePayload;
  Subscription: {};
  _UserSettingsInput: _UserSettingsInput;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jTime: _Neo4jTime;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jDateTime: _Neo4jDateTime;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalTime: _Neo4jLocalTime;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalDateTime: _Neo4jLocalDateTime;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  assignableWateringPeriod?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringPeriod']>>>, ParentType, ContextType, RequireFields<QueryAssignableWateringPeriodArgs, 'gardenId'>>;
  Garden?: Resolver<Maybe<Array<Maybe<ResolversTypes['Garden']>>>, ParentType, ContextType, RequireFields<QueryGardenArgs, never>>;
  User?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  WateringTask?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<QueryWateringTaskArgs, never>>;
  WateringPeriod?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringPeriod']>>>, ParentType, ContextType, RequireFields<QueryWateringPeriodArgs, never>>;
  ChangeRequest?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChangeRequest']>>>, ParentType, ContextType, RequireFields<QueryChangeRequestArgs, never>>;
  LogEvent?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogEvent']>>>, ParentType, ContextType, RequireFields<QueryLogEventArgs, never>>;
  GeoShape?: Resolver<Maybe<Array<Maybe<ResolversTypes['GeoShape']>>>, ParentType, ContextType, RequireFields<QueryGeoShapeArgs, never>>;
  GardenLayer?: Resolver<Maybe<Array<Maybe<ResolversTypes['GardenLayer']>>>, ParentType, ContextType, RequireFields<QueryGardenLayerArgs, never>>;
  PolygonShape?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolygonShape']>>>, ParentType, ContextType, RequireFields<QueryPolygonShapeArgs, never>>;
  MarkerShape?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkerShape']>>>, ParentType, ContextType, RequireFields<QueryMarkerShapeArgs, never>>;
  GardenFeature?: Resolver<Maybe<Array<Maybe<ResolversTypes['GardenFeature']>>>, ParentType, ContextType, RequireFields<QueryGardenFeatureArgs, never>>;
  UserSettings?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserSettings']>>>, ParentType, ContextType, RequireFields<QueryUserSettingsArgs, never>>;
};

export type WateringPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['WateringPeriod'] = ResolversParentTypes['WateringPeriod']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['_Neo4jDate'], ParentType, ContextType>;
  till?: Resolver<ResolversTypes['_Neo4jDate'], ParentType, ContextType>;
  at?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<WateringPeriodAtArgs, never>>;
  wateringtasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<WateringPeriodWateringtasksArgs, never>>;
  hasUsersAssigned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jDate'] = ResolversParentTypes['_Neo4jDate']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GardenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Garden'] = ResolversParentTypes['Garden']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gardenId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WateringTaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['WateringTask'] = ResolversParentTypes['WateringTask']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['_Neo4jDate'], ParentType, ContextType>;
  done?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  neo4jImportId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users_assigned?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<WateringTaskUsers_AssignedArgs, never>>;
  changerequests_requested_for?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChangeRequest']>>>, ParentType, ContextType, RequireFields<WateringTaskChangerequests_Requested_ForArgs, never>>;
  changerequests_requested_new_task?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChangeRequest']>>>, ParentType, ContextType, RequireFields<WateringTaskChangerequests_Requested_New_TaskArgs, never>>;
  logevents_refers_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogEvent']>>>, ParentType, ContextType, RequireFields<WateringTaskLogevents_Refers_ToArgs, never>>;
  users_available?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<WateringTaskUsers_AvailableArgs, never>>;
  wateringperiod?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringPeriod']>>>, ParentType, ContextType, RequireFields<WateringTaskWateringperiodArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neo4jImportId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  assigned?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<UserAssignedArgs, never>>;
  available?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<UserAvailableArgs, never>>;
  changerequests_requested_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChangeRequest']>>>, ParentType, ContextType, RequireFields<UserChangerequests_Requested_ByArgs, never>>;
  changerequests_requested_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChangeRequest']>>>, ParentType, ContextType, RequireFields<UserChangerequests_Requested_ToArgs, never>>;
  logevents_triggered_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogEvent']>>>, ParentType, ContextType, RequireFields<UserLogevents_Triggered_ByArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangeRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChangeRequest'] = ResolversParentTypes['ChangeRequest']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neo4jImportId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requested_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<ChangeRequestRequested_ByArgs, never>>;
  requested_for?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<ChangeRequestRequested_ForArgs, never>>;
  requested_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<ChangeRequestRequested_ToArgs, never>>;
  requested_new_task?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<ChangeRequestRequested_New_TaskArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogEvent'] = ResolversParentTypes['LogEvent']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neo4jImportId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  triggered_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<LogEventTriggered_ByArgs, never>>;
  refers_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['WateringTask']>>>, ParentType, ContextType, RequireFields<LogEventRefers_ToArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoShapeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeoShape'] = ResolversParentTypes['GeoShape']> = {
  __resolveType: TypeResolveFn<'PolygonShape' | 'MarkerShape', ParentType, ContextType>;
  shapeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<Array<Maybe<ResolversTypes['_Neo4jPoint']>>, ParentType, ContextType>;
  belongs_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['GardenLayer']>>>, ParentType, ContextType, RequireFields<GeoShapeBelongs_ToArgs, never>>;
  feature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<GeoShapeFeatureArgs, never>>;
};

export type _Neo4jPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jPoint'] = ResolversParentTypes['_Neo4jPoint']> = {
  x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GardenLayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['GardenLayer'] = ResolversParentTypes['GardenLayer']> = {
  layerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['_Neo4jDate']>, ParentType, ContextType>;
  at?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<GardenLayerAtArgs, never>>;
  has_shape?: Resolver<Maybe<Array<Maybe<ResolversTypes['GeoShape']>>>, ParentType, ContextType, RequireFields<GardenLayerHas_ShapeArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GardenFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['GardenFeature'] = ResolversParentTypes['GardenFeature']> = {
  featureId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<Maybe<Array<Maybe<ResolversTypes['GeoShape']>>>, ParentType, ContextType, RequireFields<GardenFeatureShapeArgs, never>>;
  infoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featureType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plants?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolygonShapeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PolygonShape'] = ResolversParentTypes['PolygonShape']> = {
  shapeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<Array<Maybe<ResolversTypes['_Neo4jPoint']>>, ParentType, ContextType>;
  belongs_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['GardenLayer']>>>, ParentType, ContextType, RequireFields<PolygonShapeBelongs_ToArgs, never>>;
  startPoint?: Resolver<Maybe<ResolversTypes['_Neo4jPoint']>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<PolygonShapeFeatureArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkerShapeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkerShape'] = ResolversParentTypes['MarkerShape']> = {
  shapeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<Array<Maybe<ResolversTypes['_Neo4jPoint']>>, ParentType, ContextType>;
  belongs_to?: Resolver<Maybe<Array<Maybe<ResolversTypes['GardenLayer']>>>, ParentType, ContextType, RequireFields<MarkerShapeBelongs_ToArgs, never>>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  point?: Resolver<ResolversTypes['_Neo4jPoint'], ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<MarkerShapeFeatureArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSettings'] = ResolversParentTypes['UserSettings']> = {
  ui_locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  letitrain_maximum_tasks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  ownMergeUserSettings?: Resolver<Maybe<ResolversTypes['UserSettings']>, ParentType, ContextType, RequireFields<MutationOwnMergeUserSettingsArgs, never>>;
  seedNeo4jFromJSON?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  setUserAvailability?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetUserAvailabilityArgs, 'gardenId' | 'dates'>>;
  seedAvailabilitiesFromTests?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  planWateringPeriods?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationPlanWateringPeriodsArgs, 'gardenId'>>;
  removeAssignment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveAssignmentArgs, 'date' | 'gardenId'>>;
  addAssignment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddAssignmentArgs, 'date' | 'gardenId'>>;
  pushSubscribe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPushSubscribeArgs, never>>;
  publishToAll?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPublishToAllArgs, never>>;
  sendWelcomeMail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  CreateGarden?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<MutationCreateGardenArgs, 'label'>>;
  UpdateGarden?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<MutationUpdateGardenArgs, 'gardenId'>>;
  DeleteGarden?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<MutationDeleteGardenArgs, 'gardenId'>>;
  MergeGarden?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType, RequireFields<MutationMergeGardenArgs, 'gardenId'>>;
  AddUserAssigned?: Resolver<Maybe<ResolversTypes['_AddUserAssignedPayload']>, ParentType, ContextType, RequireFields<MutationAddUserAssignedArgs, 'from' | 'to'>>;
  RemoveUserAssigned?: Resolver<Maybe<ResolversTypes['_RemoveUserAssignedPayload']>, ParentType, ContextType, RequireFields<MutationRemoveUserAssignedArgs, 'from' | 'to'>>;
  MergeUserAssigned?: Resolver<Maybe<ResolversTypes['_MergeUserAssignedPayload']>, ParentType, ContextType, RequireFields<MutationMergeUserAssignedArgs, 'from' | 'to'>>;
  AddUserAvailable?: Resolver<Maybe<ResolversTypes['_AddUserAvailablePayload']>, ParentType, ContextType, RequireFields<MutationAddUserAvailableArgs, 'from' | 'to'>>;
  RemoveUserAvailable?: Resolver<Maybe<ResolversTypes['_RemoveUserAvailablePayload']>, ParentType, ContextType, RequireFields<MutationRemoveUserAvailableArgs, 'from' | 'to'>>;
  MergeUserAvailable?: Resolver<Maybe<ResolversTypes['_MergeUserAvailablePayload']>, ParentType, ContextType, RequireFields<MutationMergeUserAvailableArgs, 'from' | 'to'>>;
  AddUserChangerequests_requested_by?: Resolver<Maybe<ResolversTypes['_AddUserChangerequests_requested_byPayload']>, ParentType, ContextType, RequireFields<MutationAddUserChangerequests_Requested_ByArgs, 'from' | 'to'>>;
  RemoveUserChangerequests_requested_by?: Resolver<Maybe<ResolversTypes['_RemoveUserChangerequests_requested_byPayload']>, ParentType, ContextType, RequireFields<MutationRemoveUserChangerequests_Requested_ByArgs, 'from' | 'to'>>;
  MergeUserChangerequests_requested_by?: Resolver<Maybe<ResolversTypes['_MergeUserChangerequests_requested_byPayload']>, ParentType, ContextType, RequireFields<MutationMergeUserChangerequests_Requested_ByArgs, 'from' | 'to'>>;
  AddUserChangerequests_requested_to?: Resolver<Maybe<ResolversTypes['_AddUserChangerequests_requested_toPayload']>, ParentType, ContextType, RequireFields<MutationAddUserChangerequests_Requested_ToArgs, 'from' | 'to'>>;
  RemoveUserChangerequests_requested_to?: Resolver<Maybe<ResolversTypes['_RemoveUserChangerequests_requested_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveUserChangerequests_Requested_ToArgs, 'from' | 'to'>>;
  MergeUserChangerequests_requested_to?: Resolver<Maybe<ResolversTypes['_MergeUserChangerequests_requested_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeUserChangerequests_Requested_ToArgs, 'from' | 'to'>>;
  AddUserLogevents_triggered_by?: Resolver<Maybe<ResolversTypes['_AddUserLogevents_triggered_byPayload']>, ParentType, ContextType, RequireFields<MutationAddUserLogevents_Triggered_ByArgs, 'from' | 'to'>>;
  RemoveUserLogevents_triggered_by?: Resolver<Maybe<ResolversTypes['_RemoveUserLogevents_triggered_byPayload']>, ParentType, ContextType, RequireFields<MutationRemoveUserLogevents_Triggered_ByArgs, 'from' | 'to'>>;
  MergeUserLogevents_triggered_by?: Resolver<Maybe<ResolversTypes['_MergeUserLogevents_triggered_byPayload']>, ParentType, ContextType, RequireFields<MutationMergeUserLogevents_Triggered_ByArgs, 'from' | 'to'>>;
  CreateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'id' | 'label' | 'neo4jImportId' | 'type'>>;
  UpdateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
  DeleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  MergeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationMergeUserArgs, 'id'>>;
  AddWateringTaskUsers_assigned?: Resolver<Maybe<ResolversTypes['_AddWateringTaskUsers_assignedPayload']>, ParentType, ContextType, RequireFields<MutationAddWateringTaskUsers_AssignedArgs, 'from' | 'to'>>;
  RemoveWateringTaskUsers_assigned?: Resolver<Maybe<ResolversTypes['_RemoveWateringTaskUsers_assignedPayload']>, ParentType, ContextType, RequireFields<MutationRemoveWateringTaskUsers_AssignedArgs, 'from' | 'to'>>;
  MergeWateringTaskUsers_assigned?: Resolver<Maybe<ResolversTypes['_MergeWateringTaskUsers_assignedPayload']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskUsers_AssignedArgs, 'from' | 'to'>>;
  AddWateringTaskChangerequests_requested_for?: Resolver<Maybe<ResolversTypes['_AddWateringTaskChangerequests_requested_forPayload']>, ParentType, ContextType, RequireFields<MutationAddWateringTaskChangerequests_Requested_ForArgs, 'from' | 'to'>>;
  RemoveWateringTaskChangerequests_requested_for?: Resolver<Maybe<ResolversTypes['_RemoveWateringTaskChangerequests_requested_forPayload']>, ParentType, ContextType, RequireFields<MutationRemoveWateringTaskChangerequests_Requested_ForArgs, 'from' | 'to'>>;
  MergeWateringTaskChangerequests_requested_for?: Resolver<Maybe<ResolversTypes['_MergeWateringTaskChangerequests_requested_forPayload']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskChangerequests_Requested_ForArgs, 'from' | 'to'>>;
  AddWateringTaskChangerequests_requested_new_task?: Resolver<Maybe<ResolversTypes['_AddWateringTaskChangerequests_requested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationAddWateringTaskChangerequests_Requested_New_TaskArgs, 'from' | 'to'>>;
  RemoveWateringTaskChangerequests_requested_new_task?: Resolver<Maybe<ResolversTypes['_RemoveWateringTaskChangerequests_requested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationRemoveWateringTaskChangerequests_Requested_New_TaskArgs, 'from' | 'to'>>;
  MergeWateringTaskChangerequests_requested_new_task?: Resolver<Maybe<ResolversTypes['_MergeWateringTaskChangerequests_requested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskChangerequests_Requested_New_TaskArgs, 'from' | 'to'>>;
  AddWateringTaskLogevents_refers_to?: Resolver<Maybe<ResolversTypes['_AddWateringTaskLogevents_refers_toPayload']>, ParentType, ContextType, RequireFields<MutationAddWateringTaskLogevents_Refers_ToArgs, 'from' | 'to'>>;
  RemoveWateringTaskLogevents_refers_to?: Resolver<Maybe<ResolversTypes['_RemoveWateringTaskLogevents_refers_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveWateringTaskLogevents_Refers_ToArgs, 'from' | 'to'>>;
  MergeWateringTaskLogevents_refers_to?: Resolver<Maybe<ResolversTypes['_MergeWateringTaskLogevents_refers_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskLogevents_Refers_ToArgs, 'from' | 'to'>>;
  AddWateringTaskUsers_available?: Resolver<Maybe<ResolversTypes['_AddWateringTaskUsers_availablePayload']>, ParentType, ContextType, RequireFields<MutationAddWateringTaskUsers_AvailableArgs, 'from' | 'to'>>;
  RemoveWateringTaskUsers_available?: Resolver<Maybe<ResolversTypes['_RemoveWateringTaskUsers_availablePayload']>, ParentType, ContextType, RequireFields<MutationRemoveWateringTaskUsers_AvailableArgs, 'from' | 'to'>>;
  MergeWateringTaskUsers_available?: Resolver<Maybe<ResolversTypes['_MergeWateringTaskUsers_availablePayload']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskUsers_AvailableArgs, 'from' | 'to'>>;
  CreateWateringTask?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType, RequireFields<MutationCreateWateringTaskArgs, 'date' | 'neo4jImportId' | 'type'>>;
  UpdateWateringTask?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType, RequireFields<MutationUpdateWateringTaskArgs, 'neo4jImportId'>>;
  DeleteWateringTask?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType, RequireFields<MutationDeleteWateringTaskArgs, 'neo4jImportId'>>;
  MergeWateringTask?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType, RequireFields<MutationMergeWateringTaskArgs, 'neo4jImportId'>>;
  CreateWateringPeriod?: Resolver<Maybe<ResolversTypes['WateringPeriod']>, ParentType, ContextType, RequireFields<MutationCreateWateringPeriodArgs, 'from' | 'till'>>;
  AddChangeRequestRequested_by?: Resolver<Maybe<ResolversTypes['_AddChangeRequestRequested_byPayload']>, ParentType, ContextType, RequireFields<MutationAddChangeRequestRequested_ByArgs, 'from' | 'to'>>;
  RemoveChangeRequestRequested_by?: Resolver<Maybe<ResolversTypes['_RemoveChangeRequestRequested_byPayload']>, ParentType, ContextType, RequireFields<MutationRemoveChangeRequestRequested_ByArgs, 'from' | 'to'>>;
  MergeChangeRequestRequested_by?: Resolver<Maybe<ResolversTypes['_MergeChangeRequestRequested_byPayload']>, ParentType, ContextType, RequireFields<MutationMergeChangeRequestRequested_ByArgs, 'from' | 'to'>>;
  AddChangeRequestRequested_for?: Resolver<Maybe<ResolversTypes['_AddChangeRequestRequested_forPayload']>, ParentType, ContextType, RequireFields<MutationAddChangeRequestRequested_ForArgs, 'from' | 'to'>>;
  RemoveChangeRequestRequested_for?: Resolver<Maybe<ResolversTypes['_RemoveChangeRequestRequested_forPayload']>, ParentType, ContextType, RequireFields<MutationRemoveChangeRequestRequested_ForArgs, 'from' | 'to'>>;
  MergeChangeRequestRequested_for?: Resolver<Maybe<ResolversTypes['_MergeChangeRequestRequested_forPayload']>, ParentType, ContextType, RequireFields<MutationMergeChangeRequestRequested_ForArgs, 'from' | 'to'>>;
  AddChangeRequestRequested_to?: Resolver<Maybe<ResolversTypes['_AddChangeRequestRequested_toPayload']>, ParentType, ContextType, RequireFields<MutationAddChangeRequestRequested_ToArgs, 'from' | 'to'>>;
  RemoveChangeRequestRequested_to?: Resolver<Maybe<ResolversTypes['_RemoveChangeRequestRequested_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveChangeRequestRequested_ToArgs, 'from' | 'to'>>;
  MergeChangeRequestRequested_to?: Resolver<Maybe<ResolversTypes['_MergeChangeRequestRequested_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeChangeRequestRequested_ToArgs, 'from' | 'to'>>;
  AddChangeRequestRequested_new_task?: Resolver<Maybe<ResolversTypes['_AddChangeRequestRequested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationAddChangeRequestRequested_New_TaskArgs, 'from' | 'to'>>;
  RemoveChangeRequestRequested_new_task?: Resolver<Maybe<ResolversTypes['_RemoveChangeRequestRequested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationRemoveChangeRequestRequested_New_TaskArgs, 'from' | 'to'>>;
  MergeChangeRequestRequested_new_task?: Resolver<Maybe<ResolversTypes['_MergeChangeRequestRequested_new_taskPayload']>, ParentType, ContextType, RequireFields<MutationMergeChangeRequestRequested_New_TaskArgs, 'from' | 'to'>>;
  CreateChangeRequest?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType, RequireFields<MutationCreateChangeRequestArgs, 'label' | 'neo4jImportId' | 'type'>>;
  UpdateChangeRequest?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType, RequireFields<MutationUpdateChangeRequestArgs, 'label'>>;
  DeleteChangeRequest?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType, RequireFields<MutationDeleteChangeRequestArgs, 'label'>>;
  MergeChangeRequest?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType, RequireFields<MutationMergeChangeRequestArgs, 'label'>>;
  AddLogEventTriggered_by?: Resolver<Maybe<ResolversTypes['_AddLogEventTriggered_byPayload']>, ParentType, ContextType, RequireFields<MutationAddLogEventTriggered_ByArgs, 'from' | 'to'>>;
  RemoveLogEventTriggered_by?: Resolver<Maybe<ResolversTypes['_RemoveLogEventTriggered_byPayload']>, ParentType, ContextType, RequireFields<MutationRemoveLogEventTriggered_ByArgs, 'from' | 'to'>>;
  MergeLogEventTriggered_by?: Resolver<Maybe<ResolversTypes['_MergeLogEventTriggered_byPayload']>, ParentType, ContextType, RequireFields<MutationMergeLogEventTriggered_ByArgs, 'from' | 'to'>>;
  AddLogEventRefers_to?: Resolver<Maybe<ResolversTypes['_AddLogEventRefers_toPayload']>, ParentType, ContextType, RequireFields<MutationAddLogEventRefers_ToArgs, 'from' | 'to'>>;
  RemoveLogEventRefers_to?: Resolver<Maybe<ResolversTypes['_RemoveLogEventRefers_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveLogEventRefers_ToArgs, 'from' | 'to'>>;
  MergeLogEventRefers_to?: Resolver<Maybe<ResolversTypes['_MergeLogEventRefers_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeLogEventRefers_ToArgs, 'from' | 'to'>>;
  CreateLogEvent?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType, RequireFields<MutationCreateLogEventArgs, 'date' | 'label' | 'neo4jImportId' | 'type'>>;
  UpdateLogEvent?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType, RequireFields<MutationUpdateLogEventArgs, 'date'>>;
  DeleteLogEvent?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType, RequireFields<MutationDeleteLogEventArgs, 'date'>>;
  MergeLogEvent?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType, RequireFields<MutationMergeLogEventArgs, 'date'>>;
  AddGeoShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_AddGeoShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationAddGeoShapeBelongs_ToArgs, 'from' | 'to'>>;
  RemoveGeoShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_RemoveGeoShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveGeoShapeBelongs_ToArgs, 'from' | 'to'>>;
  MergeGeoShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_MergeGeoShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeGeoShapeBelongs_ToArgs, 'from' | 'to'>>;
  AddGeoShapeFeature?: Resolver<Maybe<ResolversTypes['_AddGeoShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationAddGeoShapeFeatureArgs, 'from' | 'to'>>;
  RemoveGeoShapeFeature?: Resolver<Maybe<ResolversTypes['_RemoveGeoShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationRemoveGeoShapeFeatureArgs, 'from' | 'to'>>;
  MergeGeoShapeFeature?: Resolver<Maybe<ResolversTypes['_MergeGeoShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationMergeGeoShapeFeatureArgs, 'from' | 'to'>>;
  AddGardenLayerAt?: Resolver<Maybe<ResolversTypes['_AddGardenLayerAtPayload']>, ParentType, ContextType, RequireFields<MutationAddGardenLayerAtArgs, 'from' | 'to'>>;
  RemoveGardenLayerAt?: Resolver<Maybe<ResolversTypes['_RemoveGardenLayerAtPayload']>, ParentType, ContextType, RequireFields<MutationRemoveGardenLayerAtArgs, 'from' | 'to'>>;
  MergeGardenLayerAt?: Resolver<Maybe<ResolversTypes['_MergeGardenLayerAtPayload']>, ParentType, ContextType, RequireFields<MutationMergeGardenLayerAtArgs, 'from' | 'to'>>;
  AddGardenLayerHas_shape?: Resolver<Maybe<ResolversTypes['_AddGardenLayerHas_shapePayload']>, ParentType, ContextType, RequireFields<MutationAddGardenLayerHas_ShapeArgs, 'from' | 'to'>>;
  RemoveGardenLayerHas_shape?: Resolver<Maybe<ResolversTypes['_RemoveGardenLayerHas_shapePayload']>, ParentType, ContextType, RequireFields<MutationRemoveGardenLayerHas_ShapeArgs, 'from' | 'to'>>;
  MergeGardenLayerHas_shape?: Resolver<Maybe<ResolversTypes['_MergeGardenLayerHas_shapePayload']>, ParentType, ContextType, RequireFields<MutationMergeGardenLayerHas_ShapeArgs, 'from' | 'to'>>;
  CreateGardenLayer?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType, RequireFields<MutationCreateGardenLayerArgs, 'name'>>;
  UpdateGardenLayer?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType, RequireFields<MutationUpdateGardenLayerArgs, 'layerId'>>;
  DeleteGardenLayer?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType, RequireFields<MutationDeleteGardenLayerArgs, 'layerId'>>;
  MergeGardenLayer?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType, RequireFields<MutationMergeGardenLayerArgs, 'layerId'>>;
  AddPolygonShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_AddPolygonShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationAddPolygonShapeBelongs_ToArgs, 'from' | 'to'>>;
  RemovePolygonShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_RemovePolygonShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationRemovePolygonShapeBelongs_ToArgs, 'from' | 'to'>>;
  MergePolygonShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_MergePolygonShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationMergePolygonShapeBelongs_ToArgs, 'from' | 'to'>>;
  AddPolygonShapeFeature?: Resolver<Maybe<ResolversTypes['_AddPolygonShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationAddPolygonShapeFeatureArgs, 'from' | 'to'>>;
  RemovePolygonShapeFeature?: Resolver<Maybe<ResolversTypes['_RemovePolygonShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationRemovePolygonShapeFeatureArgs, 'from' | 'to'>>;
  MergePolygonShapeFeature?: Resolver<Maybe<ResolversTypes['_MergePolygonShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationMergePolygonShapeFeatureArgs, 'from' | 'to'>>;
  CreatePolygonShape?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType, RequireFields<MutationCreatePolygonShapeArgs, 'points'>>;
  UpdatePolygonShape?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType, RequireFields<MutationUpdatePolygonShapeArgs, 'shapeId'>>;
  DeletePolygonShape?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType, RequireFields<MutationDeletePolygonShapeArgs, 'shapeId'>>;
  MergePolygonShape?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType, RequireFields<MutationMergePolygonShapeArgs, 'shapeId'>>;
  AddMarkerShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_AddMarkerShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationAddMarkerShapeBelongs_ToArgs, 'from' | 'to'>>;
  RemoveMarkerShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_RemoveMarkerShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationRemoveMarkerShapeBelongs_ToArgs, 'from' | 'to'>>;
  MergeMarkerShapeBelongs_to?: Resolver<Maybe<ResolversTypes['_MergeMarkerShapeBelongs_toPayload']>, ParentType, ContextType, RequireFields<MutationMergeMarkerShapeBelongs_ToArgs, 'from' | 'to'>>;
  AddMarkerShapeFeature?: Resolver<Maybe<ResolversTypes['_AddMarkerShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationAddMarkerShapeFeatureArgs, 'from' | 'to'>>;
  RemoveMarkerShapeFeature?: Resolver<Maybe<ResolversTypes['_RemoveMarkerShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationRemoveMarkerShapeFeatureArgs, 'from' | 'to'>>;
  MergeMarkerShapeFeature?: Resolver<Maybe<ResolversTypes['_MergeMarkerShapeFeaturePayload']>, ParentType, ContextType, RequireFields<MutationMergeMarkerShapeFeatureArgs, 'from' | 'to'>>;
  CreateMarkerShape?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType, RequireFields<MutationCreateMarkerShapeArgs, 'points' | 'icon' | 'point'>>;
  UpdateMarkerShape?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType, RequireFields<MutationUpdateMarkerShapeArgs, 'shapeId'>>;
  DeleteMarkerShape?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType, RequireFields<MutationDeleteMarkerShapeArgs, 'shapeId'>>;
  MergeMarkerShape?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType, RequireFields<MutationMergeMarkerShapeArgs, 'shapeId'>>;
  AddGardenFeatureShape?: Resolver<Maybe<ResolversTypes['_AddGardenFeatureShapePayload']>, ParentType, ContextType, RequireFields<MutationAddGardenFeatureShapeArgs, 'from' | 'to'>>;
  RemoveGardenFeatureShape?: Resolver<Maybe<ResolversTypes['_RemoveGardenFeatureShapePayload']>, ParentType, ContextType, RequireFields<MutationRemoveGardenFeatureShapeArgs, 'from' | 'to'>>;
  MergeGardenFeatureShape?: Resolver<Maybe<ResolversTypes['_MergeGardenFeatureShapePayload']>, ParentType, ContextType, RequireFields<MutationMergeGardenFeatureShapeArgs, 'from' | 'to'>>;
  CreateGardenFeature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<MutationCreateGardenFeatureArgs, 'label' | 'featureType' | 'plants'>>;
  UpdateGardenFeature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<MutationUpdateGardenFeatureArgs, 'featureId'>>;
  DeleteGardenFeature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<MutationDeleteGardenFeatureArgs, 'featureId'>>;
  MergeGardenFeature?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType, RequireFields<MutationMergeGardenFeatureArgs, 'featureId'>>;
  CreateUserSettings?: Resolver<Maybe<ResolversTypes['UserSettings']>, ParentType, ContextType, RequireFields<MutationCreateUserSettingsArgs, never>>;
  UpdateUserSettings?: Resolver<Maybe<ResolversTypes['UserSettings']>, ParentType, ContextType, RequireFields<MutationUpdateUserSettingsArgs, 'ui_locale'>>;
  DeleteUserSettings?: Resolver<Maybe<ResolversTypes['UserSettings']>, ParentType, ContextType, RequireFields<MutationDeleteUserSettingsArgs, 'ui_locale'>>;
  MergeUserSettings?: Resolver<Maybe<ResolversTypes['UserSettings']>, ParentType, ContextType, RequireFields<MutationMergeUserSettingsArgs, 'ui_locale'>>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type _AddUserAssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddUserAssignedPayload'] = ResolversParentTypes['_AddUserAssignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserAssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveUserAssignedPayload'] = ResolversParentTypes['_RemoveUserAssignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserAssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeUserAssignedPayload'] = ResolversParentTypes['_MergeUserAssignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddUserAvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddUserAvailablePayload'] = ResolversParentTypes['_AddUserAvailablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserAvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveUserAvailablePayload'] = ResolversParentTypes['_RemoveUserAvailablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserAvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeUserAvailablePayload'] = ResolversParentTypes['_MergeUserAvailablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddUserChangerequests_Requested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddUserChangerequests_requested_byPayload'] = ResolversParentTypes['_AddUserChangerequests_requested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserChangerequests_Requested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveUserChangerequests_requested_byPayload'] = ResolversParentTypes['_RemoveUserChangerequests_requested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserChangerequests_Requested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeUserChangerequests_requested_byPayload'] = ResolversParentTypes['_MergeUserChangerequests_requested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddUserChangerequests_Requested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddUserChangerequests_requested_toPayload'] = ResolversParentTypes['_AddUserChangerequests_requested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserChangerequests_Requested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveUserChangerequests_requested_toPayload'] = ResolversParentTypes['_RemoveUserChangerequests_requested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserChangerequests_Requested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeUserChangerequests_requested_toPayload'] = ResolversParentTypes['_MergeUserChangerequests_requested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddUserLogevents_Triggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddUserLogevents_triggered_byPayload'] = ResolversParentTypes['_AddUserLogevents_triggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserLogevents_Triggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveUserLogevents_triggered_byPayload'] = ResolversParentTypes['_RemoveUserLogevents_triggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserLogevents_Triggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeUserLogevents_triggered_byPayload'] = ResolversParentTypes['_MergeUserLogevents_triggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddWateringTaskUsers_AssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddWateringTaskUsers_assignedPayload'] = ResolversParentTypes['_AddWateringTaskUsers_assignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveWateringTaskUsers_AssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveWateringTaskUsers_assignedPayload'] = ResolversParentTypes['_RemoveWateringTaskUsers_assignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeWateringTaskUsers_AssignedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeWateringTaskUsers_assignedPayload'] = ResolversParentTypes['_MergeWateringTaskUsers_assignedPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddWateringTaskChangerequests_requested_forPayload'] = ResolversParentTypes['_AddWateringTaskChangerequests_requested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveWateringTaskChangerequests_requested_forPayload'] = ResolversParentTypes['_RemoveWateringTaskChangerequests_requested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeWateringTaskChangerequests_requested_forPayload'] = ResolversParentTypes['_MergeWateringTaskChangerequests_requested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddWateringTaskChangerequests_requested_new_taskPayload'] = ResolversParentTypes['_AddWateringTaskChangerequests_requested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveWateringTaskChangerequests_requested_new_taskPayload'] = ResolversParentTypes['_RemoveWateringTaskChangerequests_requested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeWateringTaskChangerequests_requested_new_taskPayload'] = ResolversParentTypes['_MergeWateringTaskChangerequests_requested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddWateringTaskLogevents_refers_toPayload'] = ResolversParentTypes['_AddWateringTaskLogevents_refers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveWateringTaskLogevents_refers_toPayload'] = ResolversParentTypes['_RemoveWateringTaskLogevents_refers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeWateringTaskLogevents_refers_toPayload'] = ResolversParentTypes['_MergeWateringTaskLogevents_refers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddWateringTaskUsers_AvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddWateringTaskUsers_availablePayload'] = ResolversParentTypes['_AddWateringTaskUsers_availablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveWateringTaskUsers_AvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveWateringTaskUsers_availablePayload'] = ResolversParentTypes['_RemoveWateringTaskUsers_availablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeWateringTaskUsers_AvailablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeWateringTaskUsers_availablePayload'] = ResolversParentTypes['_MergeWateringTaskUsers_availablePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddChangeRequestRequested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddChangeRequestRequested_byPayload'] = ResolversParentTypes['_AddChangeRequestRequested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveChangeRequestRequested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveChangeRequestRequested_byPayload'] = ResolversParentTypes['_RemoveChangeRequestRequested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeChangeRequestRequested_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeChangeRequestRequested_byPayload'] = ResolversParentTypes['_MergeChangeRequestRequested_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddChangeRequestRequested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddChangeRequestRequested_forPayload'] = ResolversParentTypes['_AddChangeRequestRequested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveChangeRequestRequested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveChangeRequestRequested_forPayload'] = ResolversParentTypes['_RemoveChangeRequestRequested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeChangeRequestRequested_ForPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeChangeRequestRequested_forPayload'] = ResolversParentTypes['_MergeChangeRequestRequested_forPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddChangeRequestRequested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddChangeRequestRequested_toPayload'] = ResolversParentTypes['_AddChangeRequestRequested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveChangeRequestRequested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveChangeRequestRequested_toPayload'] = ResolversParentTypes['_RemoveChangeRequestRequested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeChangeRequestRequested_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeChangeRequestRequested_toPayload'] = ResolversParentTypes['_MergeChangeRequestRequested_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddChangeRequestRequested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddChangeRequestRequested_new_taskPayload'] = ResolversParentTypes['_AddChangeRequestRequested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveChangeRequestRequested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveChangeRequestRequested_new_taskPayload'] = ResolversParentTypes['_RemoveChangeRequestRequested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeChangeRequestRequested_New_TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeChangeRequestRequested_new_taskPayload'] = ResolversParentTypes['_MergeChangeRequestRequested_new_taskPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['ChangeRequest']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddLogEventTriggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddLogEventTriggered_byPayload'] = ResolversParentTypes['_AddLogEventTriggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveLogEventTriggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveLogEventTriggered_byPayload'] = ResolversParentTypes['_RemoveLogEventTriggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeLogEventTriggered_ByPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeLogEventTriggered_byPayload'] = ResolversParentTypes['_MergeLogEventTriggered_byPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddLogEventRefers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddLogEventRefers_toPayload'] = ResolversParentTypes['_AddLogEventRefers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveLogEventRefers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveLogEventRefers_toPayload'] = ResolversParentTypes['_RemoveLogEventRefers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeLogEventRefers_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeLogEventRefers_toPayload'] = ResolversParentTypes['_MergeLogEventRefers_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['LogEvent']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['WateringTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddGeoShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddGeoShapeBelongs_toPayload'] = ResolversParentTypes['_AddGeoShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveGeoShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveGeoShapeBelongs_toPayload'] = ResolversParentTypes['_RemoveGeoShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeGeoShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeGeoShapeBelongs_toPayload'] = ResolversParentTypes['_MergeGeoShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddGeoShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddGeoShapeFeaturePayload'] = ResolversParentTypes['_AddGeoShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveGeoShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveGeoShapeFeaturePayload'] = ResolversParentTypes['_RemoveGeoShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeGeoShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeGeoShapeFeaturePayload'] = ResolversParentTypes['_MergeGeoShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddGardenLayerAtPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddGardenLayerAtPayload'] = ResolversParentTypes['_AddGardenLayerAtPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveGardenLayerAtPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveGardenLayerAtPayload'] = ResolversParentTypes['_RemoveGardenLayerAtPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeGardenLayerAtPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeGardenLayerAtPayload'] = ResolversParentTypes['_MergeGardenLayerAtPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Garden']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddGardenLayerHas_ShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddGardenLayerHas_shapePayload'] = ResolversParentTypes['_AddGardenLayerHas_shapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveGardenLayerHas_ShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveGardenLayerHas_shapePayload'] = ResolversParentTypes['_RemoveGardenLayerHas_shapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeGardenLayerHas_ShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeGardenLayerHas_shapePayload'] = ResolversParentTypes['_MergeGardenLayerHas_shapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddPolygonShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddPolygonShapeBelongs_toPayload'] = ResolversParentTypes['_AddPolygonShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemovePolygonShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemovePolygonShapeBelongs_toPayload'] = ResolversParentTypes['_RemovePolygonShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergePolygonShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergePolygonShapeBelongs_toPayload'] = ResolversParentTypes['_MergePolygonShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddPolygonShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddPolygonShapeFeaturePayload'] = ResolversParentTypes['_AddPolygonShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemovePolygonShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemovePolygonShapeFeaturePayload'] = ResolversParentTypes['_RemovePolygonShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergePolygonShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergePolygonShapeFeaturePayload'] = ResolversParentTypes['_MergePolygonShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['PolygonShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddMarkerShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddMarkerShapeBelongs_toPayload'] = ResolversParentTypes['_AddMarkerShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveMarkerShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveMarkerShapeBelongs_toPayload'] = ResolversParentTypes['_RemoveMarkerShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeMarkerShapeBelongs_ToPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeMarkerShapeBelongs_toPayload'] = ResolversParentTypes['_MergeMarkerShapeBelongs_toPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GardenLayer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddMarkerShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddMarkerShapeFeaturePayload'] = ResolversParentTypes['_AddMarkerShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveMarkerShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveMarkerShapeFeaturePayload'] = ResolversParentTypes['_RemoveMarkerShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeMarkerShapeFeaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeMarkerShapeFeaturePayload'] = ResolversParentTypes['_MergeMarkerShapeFeaturePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['MarkerShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddGardenFeatureShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_AddGardenFeatureShapePayload'] = ResolversParentTypes['_AddGardenFeatureShapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveGardenFeatureShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_RemoveGardenFeatureShapePayload'] = ResolversParentTypes['_RemoveGardenFeatureShapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeGardenFeatureShapePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['_MergeGardenFeatureShapePayload'] = ResolversParentTypes['_MergeGardenFeatureShapePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['GardenFeature']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['GeoShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  WateringTaskChange?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, 'WateringTaskChange', ParentType, ContextType>;
};

export type _Neo4jTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jTime'] = ResolversParentTypes['_Neo4jTime']> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jDateTime'] = ResolversParentTypes['_Neo4jDateTime']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jLocalTime'] = ResolversParentTypes['_Neo4jLocalTime']> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalDateTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jLocalDateTime'] = ResolversParentTypes['_Neo4jLocalDateTime']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  WateringPeriod?: WateringPeriodResolvers<ContextType>;
  _Neo4jDate?: _Neo4jDateResolvers<ContextType>;
  Garden?: GardenResolvers<ContextType>;
  WateringTask?: WateringTaskResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ChangeRequest?: ChangeRequestResolvers<ContextType>;
  LogEvent?: LogEventResolvers<ContextType>;
  GeoShape?: GeoShapeResolvers<ContextType>;
  _Neo4jPoint?: _Neo4jPointResolvers<ContextType>;
  GardenLayer?: GardenLayerResolvers<ContextType>;
  GardenFeature?: GardenFeatureResolvers<ContextType>;
  PolygonShape?: PolygonShapeResolvers<ContextType>;
  MarkerShape?: MarkerShapeResolvers<ContextType>;
  UserSettings?: UserSettingsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  _AddUserAssignedPayload?: _AddUserAssignedPayloadResolvers<ContextType>;
  _RemoveUserAssignedPayload?: _RemoveUserAssignedPayloadResolvers<ContextType>;
  _MergeUserAssignedPayload?: _MergeUserAssignedPayloadResolvers<ContextType>;
  _AddUserAvailablePayload?: _AddUserAvailablePayloadResolvers<ContextType>;
  _RemoveUserAvailablePayload?: _RemoveUserAvailablePayloadResolvers<ContextType>;
  _MergeUserAvailablePayload?: _MergeUserAvailablePayloadResolvers<ContextType>;
  _AddUserChangerequests_requested_byPayload?: _AddUserChangerequests_Requested_ByPayloadResolvers<ContextType>;
  _RemoveUserChangerequests_requested_byPayload?: _RemoveUserChangerequests_Requested_ByPayloadResolvers<ContextType>;
  _MergeUserChangerequests_requested_byPayload?: _MergeUserChangerequests_Requested_ByPayloadResolvers<ContextType>;
  _AddUserChangerequests_requested_toPayload?: _AddUserChangerequests_Requested_ToPayloadResolvers<ContextType>;
  _RemoveUserChangerequests_requested_toPayload?: _RemoveUserChangerequests_Requested_ToPayloadResolvers<ContextType>;
  _MergeUserChangerequests_requested_toPayload?: _MergeUserChangerequests_Requested_ToPayloadResolvers<ContextType>;
  _AddUserLogevents_triggered_byPayload?: _AddUserLogevents_Triggered_ByPayloadResolvers<ContextType>;
  _RemoveUserLogevents_triggered_byPayload?: _RemoveUserLogevents_Triggered_ByPayloadResolvers<ContextType>;
  _MergeUserLogevents_triggered_byPayload?: _MergeUserLogevents_Triggered_ByPayloadResolvers<ContextType>;
  _AddWateringTaskUsers_assignedPayload?: _AddWateringTaskUsers_AssignedPayloadResolvers<ContextType>;
  _RemoveWateringTaskUsers_assignedPayload?: _RemoveWateringTaskUsers_AssignedPayloadResolvers<ContextType>;
  _MergeWateringTaskUsers_assignedPayload?: _MergeWateringTaskUsers_AssignedPayloadResolvers<ContextType>;
  _AddWateringTaskChangerequests_requested_forPayload?: _AddWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType>;
  _RemoveWateringTaskChangerequests_requested_forPayload?: _RemoveWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType>;
  _MergeWateringTaskChangerequests_requested_forPayload?: _MergeWateringTaskChangerequests_Requested_ForPayloadResolvers<ContextType>;
  _AddWateringTaskChangerequests_requested_new_taskPayload?: _AddWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType>;
  _RemoveWateringTaskChangerequests_requested_new_taskPayload?: _RemoveWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType>;
  _MergeWateringTaskChangerequests_requested_new_taskPayload?: _MergeWateringTaskChangerequests_Requested_New_TaskPayloadResolvers<ContextType>;
  _AddWateringTaskLogevents_refers_toPayload?: _AddWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType>;
  _RemoveWateringTaskLogevents_refers_toPayload?: _RemoveWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType>;
  _MergeWateringTaskLogevents_refers_toPayload?: _MergeWateringTaskLogevents_Refers_ToPayloadResolvers<ContextType>;
  _AddWateringTaskUsers_availablePayload?: _AddWateringTaskUsers_AvailablePayloadResolvers<ContextType>;
  _RemoveWateringTaskUsers_availablePayload?: _RemoveWateringTaskUsers_AvailablePayloadResolvers<ContextType>;
  _MergeWateringTaskUsers_availablePayload?: _MergeWateringTaskUsers_AvailablePayloadResolvers<ContextType>;
  _AddChangeRequestRequested_byPayload?: _AddChangeRequestRequested_ByPayloadResolvers<ContextType>;
  _RemoveChangeRequestRequested_byPayload?: _RemoveChangeRequestRequested_ByPayloadResolvers<ContextType>;
  _MergeChangeRequestRequested_byPayload?: _MergeChangeRequestRequested_ByPayloadResolvers<ContextType>;
  _AddChangeRequestRequested_forPayload?: _AddChangeRequestRequested_ForPayloadResolvers<ContextType>;
  _RemoveChangeRequestRequested_forPayload?: _RemoveChangeRequestRequested_ForPayloadResolvers<ContextType>;
  _MergeChangeRequestRequested_forPayload?: _MergeChangeRequestRequested_ForPayloadResolvers<ContextType>;
  _AddChangeRequestRequested_toPayload?: _AddChangeRequestRequested_ToPayloadResolvers<ContextType>;
  _RemoveChangeRequestRequested_toPayload?: _RemoveChangeRequestRequested_ToPayloadResolvers<ContextType>;
  _MergeChangeRequestRequested_toPayload?: _MergeChangeRequestRequested_ToPayloadResolvers<ContextType>;
  _AddChangeRequestRequested_new_taskPayload?: _AddChangeRequestRequested_New_TaskPayloadResolvers<ContextType>;
  _RemoveChangeRequestRequested_new_taskPayload?: _RemoveChangeRequestRequested_New_TaskPayloadResolvers<ContextType>;
  _MergeChangeRequestRequested_new_taskPayload?: _MergeChangeRequestRequested_New_TaskPayloadResolvers<ContextType>;
  _AddLogEventTriggered_byPayload?: _AddLogEventTriggered_ByPayloadResolvers<ContextType>;
  _RemoveLogEventTriggered_byPayload?: _RemoveLogEventTriggered_ByPayloadResolvers<ContextType>;
  _MergeLogEventTriggered_byPayload?: _MergeLogEventTriggered_ByPayloadResolvers<ContextType>;
  _AddLogEventRefers_toPayload?: _AddLogEventRefers_ToPayloadResolvers<ContextType>;
  _RemoveLogEventRefers_toPayload?: _RemoveLogEventRefers_ToPayloadResolvers<ContextType>;
  _MergeLogEventRefers_toPayload?: _MergeLogEventRefers_ToPayloadResolvers<ContextType>;
  _AddGeoShapeBelongs_toPayload?: _AddGeoShapeBelongs_ToPayloadResolvers<ContextType>;
  _RemoveGeoShapeBelongs_toPayload?: _RemoveGeoShapeBelongs_ToPayloadResolvers<ContextType>;
  _MergeGeoShapeBelongs_toPayload?: _MergeGeoShapeBelongs_ToPayloadResolvers<ContextType>;
  _AddGeoShapeFeaturePayload?: _AddGeoShapeFeaturePayloadResolvers<ContextType>;
  _RemoveGeoShapeFeaturePayload?: _RemoveGeoShapeFeaturePayloadResolvers<ContextType>;
  _MergeGeoShapeFeaturePayload?: _MergeGeoShapeFeaturePayloadResolvers<ContextType>;
  _AddGardenLayerAtPayload?: _AddGardenLayerAtPayloadResolvers<ContextType>;
  _RemoveGardenLayerAtPayload?: _RemoveGardenLayerAtPayloadResolvers<ContextType>;
  _MergeGardenLayerAtPayload?: _MergeGardenLayerAtPayloadResolvers<ContextType>;
  _AddGardenLayerHas_shapePayload?: _AddGardenLayerHas_ShapePayloadResolvers<ContextType>;
  _RemoveGardenLayerHas_shapePayload?: _RemoveGardenLayerHas_ShapePayloadResolvers<ContextType>;
  _MergeGardenLayerHas_shapePayload?: _MergeGardenLayerHas_ShapePayloadResolvers<ContextType>;
  _AddPolygonShapeBelongs_toPayload?: _AddPolygonShapeBelongs_ToPayloadResolvers<ContextType>;
  _RemovePolygonShapeBelongs_toPayload?: _RemovePolygonShapeBelongs_ToPayloadResolvers<ContextType>;
  _MergePolygonShapeBelongs_toPayload?: _MergePolygonShapeBelongs_ToPayloadResolvers<ContextType>;
  _AddPolygonShapeFeaturePayload?: _AddPolygonShapeFeaturePayloadResolvers<ContextType>;
  _RemovePolygonShapeFeaturePayload?: _RemovePolygonShapeFeaturePayloadResolvers<ContextType>;
  _MergePolygonShapeFeaturePayload?: _MergePolygonShapeFeaturePayloadResolvers<ContextType>;
  _AddMarkerShapeBelongs_toPayload?: _AddMarkerShapeBelongs_ToPayloadResolvers<ContextType>;
  _RemoveMarkerShapeBelongs_toPayload?: _RemoveMarkerShapeBelongs_ToPayloadResolvers<ContextType>;
  _MergeMarkerShapeBelongs_toPayload?: _MergeMarkerShapeBelongs_ToPayloadResolvers<ContextType>;
  _AddMarkerShapeFeaturePayload?: _AddMarkerShapeFeaturePayloadResolvers<ContextType>;
  _RemoveMarkerShapeFeaturePayload?: _RemoveMarkerShapeFeaturePayloadResolvers<ContextType>;
  _MergeMarkerShapeFeaturePayload?: _MergeMarkerShapeFeaturePayloadResolvers<ContextType>;
  _AddGardenFeatureShapePayload?: _AddGardenFeatureShapePayloadResolvers<ContextType>;
  _RemoveGardenFeatureShapePayload?: _RemoveGardenFeatureShapePayloadResolvers<ContextType>;
  _MergeGardenFeatureShapePayload?: _MergeGardenFeatureShapePayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Neo4jTime?: _Neo4jTimeResolvers<ContextType>;
  _Neo4jDateTime?: _Neo4jDateTimeResolvers<ContextType>;
  _Neo4jLocalTime?: _Neo4jLocalTimeResolvers<ContextType>;
  _Neo4jLocalDateTime?: _Neo4jLocalDateTimeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
