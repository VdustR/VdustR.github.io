# date

## Format

```sh
$ date '+%Y-%m-%d %H:%M:%S.%N'
2019-12-04 14:27:59.372201900
```

Some OS like alpine do not support milliseconds

Reference: <https://stackoverflow.com/questions/1401482/yyyy-mm-dd-format-date-in-shell-script/47216077>

## Timezone

```sh
$ TZ=Asia/Taipei date '+%Y-%m-%d %H:%M:%S'
2019-12-04 14:27:59
```

- Reference: <https://unix.stackexchange.com/questions/48101/how-can-i-have-date-output-the-time-from-a-different-timezone>
- Timezone List: <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones> (check TZ database name column)

If TZ not works, install `tzdata`
