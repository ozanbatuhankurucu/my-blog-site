"use client"
import React, {
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
  useRef,
  useState
} from "react"
import cx from "classnames"

interface GroupHeader {
  title: ReactNode
  span: number
  className?: string
}

export interface GroupHeaders {
  stickyColumnsCountData: number
  headersData: GroupHeader[]
  commonHeaderClasses?: string
}

type HeadersDataType = {
  className?: string
  title: ReactNode
  columnWidth: number
}

export interface HeadersType {
  commonHeaderClasses?: string
  headersData: HeadersDataType[]
}

export interface RowType {
  key: string
  columns: {
    tableDataClassName?: string
    tableData: ReactNode
  }[]
  rowOnClick?: MouseEventHandler<HTMLTableRowElement>
  commonColumnClasses?: string
}

interface StickyTableProps {
  headers: HeadersType
  rows: RowType[]
  stickyColumnsCount: number
  headerHeight: number
  loading: boolean
  isDataEmpty: boolean
  groupHeaders?: GroupHeaders[]
  noDataMessage?: string
}

const StickyTable: React.FC<StickyTableProps> = ({
  loading,
  isDataEmpty,
  noDataMessage,
  headers,
  rows,
  stickyColumnsCount,
  groupHeaders,
  headerHeight
}) => {
  const columnWidths = headers.headersData.map(({ columnWidth }) => columnWidth)
  const whiteHazeDivRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const getStickyStyles = (
    index: number,
    zIndex: number,
    elseZIndex: number,
    stickyColumnsCountParam: number,
    columnWidthsParam: number[]
  ): React.CSSProperties => {
    if (index < stickyColumnsCountParam) {
      const leftPosition = columnWidthsParam
        .slice(0, index)
        .reduce((total, width) => total + width, 0)
      return {
        zIndex,
        left: `${leftPosition}px`,
        position: "sticky"
      }
    }
    return { zIndex: elseZIndex }
  }

  const getTopPosition = (rowIndex = 0) => rowIndex * headerHeight

  const handleContainerOnScroll = (event: SyntheticEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget
    const whiteHazeDivCurrent = whiteHazeDivRef.current
    if (whiteHazeDivCurrent) {
      whiteHazeDivCurrent.style.right = `${String(-currentTarget.scrollLeft)}px`
    }
    setScrollTop(currentTarget.scrollTop)
  }

  const getGroupHeadersWidths = (headersData: GroupHeader[]) => {
    const widths: number[] = []
    let currentIndex = 0

    headersData.forEach((group) => {
      const span = group.span
      let totalWidth = 0

      for (let i = currentIndex; i < currentIndex + span; i += 1) {
        totalWidth += columnWidths[i]
      }

      widths.push(totalWidth)
      currentIndex += span
    })
    return widths
  }

  if (loading) {
    return (
      <div className='h-[60vh]'>
        <span>Loading...</span>
      </div>
    )
  }

  if (isDataEmpty) {
    return (
      <div className='h-[60vh] flex items-center justify-center'>
        <div className='text-navy-30 text-lg font-normal'>
          {noDataMessage || "No Data Available"}
        </div>
      </div>
    )
  }

  return (
    <div
      className='overflow-auto h-[60vh] relative no-scrollbar'
      onScroll={handleContainerOnScroll}>
      <table className='table-auto text-left whitespace-no-wrap min-w-max border-separate border-spacing-0'>
        <thead>
          {groupHeaders &&
            groupHeaders.map(
              (
                { headersData, stickyColumnsCountData, commonHeaderClasses },
                rowIndex
              ) => {
                const widths = getGroupHeadersWidths(headersData)
                return (
                  <tr key={rowIndex}>
                    {headersData.map(({ span, title, className }, index) => (
                      <th
                        key={index}
                        style={{
                          ...getStickyStyles(
                            index,
                            304,
                            303,
                            stickyColumnsCountData,
                            widths
                          ),
                          position: "sticky",
                          top: `${getTopPosition(rowIndex)}px`,
                          height: headerHeight
                        }}
                        className={cx(
                          "py-[10px] px-4 border-navy-10 text-xs text-navy-30 font-medium ",
                          commonHeaderClasses,
                          className
                        )}
                        colSpan={span}>
                        {title}
                      </th>
                    ))}
                  </tr>
                )
              }
            )}
          <tr>
            {headers.headersData.map(({ title, className }, index) => (
              <th
                key={index}
                style={{
                  ...getStickyStyles(
                    index,
                    304,
                    303,
                    stickyColumnsCount,
                    columnWidths
                  ),
                  position: "sticky",
                  top: `${getTopPosition(groupHeaders?.length)}px`,
                  width: columnWidths[index],
                  height: headerHeight
                }}
                className={cx(
                  "bg-white py-[10px] px-4 border-navy-10 text-xs text-navy-30 font-medium",
                  headers.commonHeaderClasses,
                  className
                )}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ columns, key, rowOnClick, commonColumnClasses }) => (
            <tr
              key={key}
              className={cx({
                "cursor-pointer": !!rowOnClick
              })}
              onClick={rowOnClick}>
              {columns.map(({ tableData, tableDataClassName }, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    ...getStickyStyles(
                      cellIndex,
                      2,
                      1,
                      stickyColumnsCount,
                      columnWidths
                    ),
                    width: columnWidths[cellIndex]
                  }}
                  className={cx(
                    "py-[10px] text-sm px-4 border-b border-navy-10 align-top",
                    commonColumnClasses,
                    tableDataClassName
                  )}>
                  {tableData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        ref={whiteHazeDivRef}
        style={{
          background:
            "linear-gradient(270deg, #F8F6FA 5.73%, rgba(248, 246, 250, 0.00) 100%)",
          top: scrollTop
        }}
        className='w-12 h-full absolute right-0 top-0 z-[350]'
      />
    </div>
  )
}

export default StickyTable
