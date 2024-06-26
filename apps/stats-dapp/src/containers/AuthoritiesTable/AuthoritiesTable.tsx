import {
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from '@tanstack/react-table';
import { Spinner } from '@webb-tools/icons';
import { Typography } from '@webb-tools/webb-ui-components';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  AccordionItem,
  Avatar,
  Button,
  CardTable,
  Divider,
  Filter,
  KeyValueWithButton,
  Progress,
  Slider,
  Table,
} from '@webb-tools/webb-ui-components/components';
import { CheckBoxMenuGroup } from '@webb-tools/webb-ui-components/components/CheckBoxMenu/CheckBoxMenuGroup';
import { fuzzyFilter } from '@webb-tools/webb-ui-components/components/Filter/utils';
import { FC, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountryIcon } from '../../components/CountryIcon/CountryIcon';
import { useCountriesQuery } from '../../generated/graphql';
import {
  AuthorisesQuery,
  AuthorityListItem,
  useAuthorities,
} from '../../provider/hooks';
import { AuthoritiesTableProps } from './types';

const columnHelper = createColumnHelper<AuthorityListItem>();

const columns = [
  columnHelper.accessor('id', {
    header: 'Participant',
    enableColumnFilter: false,
    cell: (props) => (
      <div className="flex items-center space-x-2">
        <Avatar sourceVariant={'address'} value={props.getValue<string>()} />
        <KeyValueWithButton
          keyValue={props.getValue<string>()}
          size="sm"
          isHiddenLabel
          hasShortenValue={false}
        />
      </div>
    ),
  }),

  columnHelper.accessor('location', {
    header: 'Location',
    enableColumnFilter: false,
    cell: (props) => {
      const countryCode = props.getValue();
      return (
        <Typography variant="body1" fw="bold" component="span">
          {countryCode ? <CountryIcon size={'lg'} name={countryCode} /> : `🌎`}
        </Typography>
      );
    },
  }),

  columnHelper.accessor('uptime', {
    header: 'Uptime',
    enableColumnFilter: false,
    cell: (props) => (
      <Progress
        size="sm"
        value={parseInt(props.getValue().toString())}
        className="w-[100px]"
        suffixLabel="%"
      />
    ),
  }),

  columnHelper.accessor('reputation', {
    header: 'Reputation',
    enableColumnFilter: false,
    cell: (props) => (
      <Progress
        size="sm"
        value={Number(parseFloat(props.getValue().toString()).toFixed(2))}
        className="w-[100px]"
        suffixLabel="%"
      />
    ),
  }),

  columnHelper.accessor('id', {
    header: '',
    id: 'details',
    cell: (props) => (
      <Button variant="link" size="sm">
        <Link to={`/authorities/drawer/${props.getValue<string>()}`}>
          Details
        </Link>
      </Button>
    ),
  }),
];

export const AuthoritiesTable: FC<AuthoritiesTableProps> = ({
  data: dataProp,
}) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const [selectedCountries, setSelectedCountries] = useState<'all' | string[]>(
    'all',
  );
  const countriesQuery = useCountriesQuery();
  const countries = useMemo<string[]>(() => {
    return (
      countriesQuery.data?.countryCodes?.nodes?.map((country) => {
        return country?.code ?? '';
      }) ?? []
    );
  }, [countriesQuery]);

  const [uptimeFilter, setUptimeFilter] = useState<[number, number]>([0, 100]);
  const [reputationFilter, setReputationFilter] = useState<[number, number]>([
    0, 100,
  ]);
  const [globalFilter, setGlobalFilter] = useState('');

  const query = useMemo<AuthorisesQuery>(
    () => ({
      offset: pageIndex * pageSize,
      perPage: pageSize,
      filter: {
        uptime: uptimeFilter,
        reputation: reputationFilter,
        countries: selectedCountries === 'all' ? countries : selectedCountries,
        search: globalFilter,
      },
    }),
    [
      pageIndex,
      pageSize,
      uptimeFilter,
      reputationFilter,
      selectedCountries,
      countries,
      globalFilter,
    ],
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const authorities = useAuthorities(query);

  const data = useMemo(() => {
    return authorities.val?.items?.filter((item) => item.isBest === true) || [];
  }, [authorities]);

  const totalItems = useMemo(() => data.length, [data]);

  const pageCount = useMemo(
    () => Math.ceil(totalItems / pageSize),
    [pageSize, totalItems],
  );

  const table = useReactTable<AuthorityListItem>({
    data: data ?? ([] as AuthorityListItem[]),
    columns,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    manualPagination: dataProp === undefined,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <CardTable
      titleProps={{
        title: 'DKG Authorities',
        info: 'List of all the authorities in the DKG with their uptime and reputation.',
        variant: 'h5',
      }}
      leftTitle={
        <Filter
          searchPlaceholder={'Search authorities'}
          searchText={globalFilter}
          onSearchChange={(nextValue: string | number) => {
            setGlobalFilter(nextValue.toString());
          }}
          clearAllFilters={() => {
            table.setColumnFilters([]);
            table.setGlobalFilter('');
          }}
        >
          <Accordion type={'single'} collapsible>
            <AccordionItem className={'p-0 py-0'} value={'location'}>
              <AccordionButton>Location</AccordionButton>
              <Divider className="bg-mono-40 dark:bg-mono-140" />
              <AccordionContent>
                <LocationFilter
                  selected={selectedCountries}
                  countries={countries}
                  onChange={(c) => {
                    setSelectedCountries(c);
                  }}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className={'p-0 py-0'} value={'uptime'}>
              <AccordionButton>Uptime</AccordionButton>
              <Divider className="bg-mono-40 dark:bg-mono-140" />
              <AccordionContent>
                <Slider
                  max={100}
                  defaultValue={[0, 100]}
                  value={uptimeFilter}
                  onChange={(val) => setUptimeFilter(val as any)}
                  className="w-full min-w-0"
                  hasLabel
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className={'p-0 py-0'} value={'reputation'}>
              <AccordionButton>Reputation</AccordionButton>
              <AccordionContent>
                <Slider
                  max={100}
                  defaultValue={[0, 100]}
                  value={reputationFilter}
                  onChange={(val) => setReputationFilter(val as any)}
                  className="w-full min-w-0"
                  hasLabel
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Filter>
      }
    >
      {!authorities.isLoading ? (
        <Table
          tableProps={table}
          isPaginated
          totalRecords={totalItems}
          title="DKG Authorities"
        />
      ) : (
        <div className="h-[400px] flex items-center flex-col justify-center">
          <Spinner size="xl" />
        </div>
      )}
    </CardTable>
  );
};

const LocationFilter: FC<{
  selected: 'all' | string[];
  onChange(nextValue: 'all' | string[]): void;
  countries: string[];
}> = ({ countries, onChange, selected }) => {
  return (
    <div
      className={
        'max-w-[300px] max-h-[300px] overflow-x-hidden overflow-y-auto'
      }
    >
      <CheckBoxMenuGroup
        value={selected}
        options={countries}
        onChange={(v) => {
          onChange(v);
        }}
        iconGetter={(c) => {
          return <CountryIcon name={c} />;
        }}
        labelGetter={(c) => c}
        keyGetter={(c) => c}
      />
    </div>
  );
};
